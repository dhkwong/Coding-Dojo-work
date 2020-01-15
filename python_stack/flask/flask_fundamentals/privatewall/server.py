from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt

import re

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "secret key"
# our index route will handle rendering our form
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# checks for at least 8 characters
PASSWORD_REGEX = re.compile(r'[a-zA-Z0-9@#$%^&+=]{8,}')
# checks for upper and lower case letters, and at LEAST 2 characters
NAME_REGEX = re.compile(r'[a-zA-Z]{2,}')


@app.route("/")
def index():

    return render_template("index.html")


@app.route("/processreg", methods=['POST'])
def process():
    session['valid'] = "display:none;"
    session['invalid'] = "display:none;"
    session['id'] = ""

    reg_is_valid = True     # assume True
    # test whether a field matches the pattern
    if len(request.form['fname_reg']) == 0:
        session['invalid'] = ""
        reg_is_valid = False
        flash("Field is required")
    # test whether a field matches the pattern
    if len(request.form['lname_reg']) == 0:
        session['invalid'] = ""
        reg_is_valid = False
        flash("Field is required")
    # test whether a field matches the pattern
    if len(request.form['email_reg']) == 0:
        session['invalid'] = ""
        reg_is_valid = False
        flash("Field is required")
    # test if proposed registration password is 8chars or more
    if len(request.form['password_reg']) == 0:
        session['invalid'] = ""
        reg_is_valid = False
        flash("Field is required")
    if len(request.form['password_reg_confirm']) == 0:
        session['invalid'] = ""
        reg_is_valid = False
        flash("Field is required")
    if not reg_is_valid:    # if any of the fields switched our is_valid toggle to False
        # redirect back to the method that displays the index page
        return redirect('/')

    # test whether a field matches the pattern
    if not NAME_REGEX.match(request.form['fname_reg']):
        session['invalid'] = ""
        reg_is_valid = False
        flash("Invalid first name!")
    # test whether a field matches the pattern
    if not NAME_REGEX.match(request.form['lname_reg']):
        session['invalid'] = ""
        reg_is_valid = False
        flash("Invalid last name!")
    # test whether a field matches the pattern
    if not EMAIL_REGEX.match(request.form['email_reg']):
        session['invalid'] = ""
        reg_is_valid = False
        flash("Invalid email address!")
    # test if proposed registration password is 8chars or more
    if not PASSWORD_REGEX.match(request.form['password_reg']):
        session['invalid'] = ""
        reg_is_valid = False
        flash("Invalid password")
    if not request.form['password_reg_confirm'] == request.form['password_reg'] or len(request.form['password_reg_confirm']) < 2:
        session['invalid'] = ""
        reg_is_valid = False
        flash("Password must match!")
    if not reg_is_valid:    # if any of the fields switched our is_valid toggle to False
        # redirect back to the method that displays the index page
        return redirect('/')

    else:
        # include some logic to validate user input before adding them to the database!(above with if statements)
        # create the hash
        pw_hash = bcrypt.generate_password_hash(request.form['password_reg'])
        print(pw_hash)
        # prints something like b'$2b$12$sqjyok5RQccl9S6eFLhEPuaRaJCcH3Esl2RWLm/cimMIEnhnLb7iC'
        # be sure you set up your database so it can store password hashes this long (60 characters)
        mysql = connectToMySQL("mydb")
        query = "INSERT INTO users (first_name, last_name, email, pw_hash) VALUES (%(first_name)s,%(last_name)s,%(email)s, %(password_hash)s);"
        # put the pw_hash in our data dictionary, NOT the password the user provided
        data = {"first_name": request.form['fname_reg'],
                "last_name": request.form['lname_reg'],
                "email": request.form['email_reg'],
                "password_hash": pw_hash}
        # insert returns the ROW ID aka id of that particular row. hence user id
        session['id'] = mysql.query_db(query, data)
        print(session['id'])
        # save rowid from insert into session['id']
    return redirect("/success")


@app.route("/processlogin", methods=['POST'])
def processlogin():
    mysql = connectToMySQL("mydb")
    query = "SELECT * FROM users WHERE email = %(email_login)s;"
    data = {
        "email_login": request.form["email_login"]
    }

    result = mysql.query_db(query, data)
    if len(result) > 0:
        # assuming we only have one user with this username, the user would be first in the list we get back
        # of course, we should have some logic to prevent duplicates of usernames when we create users
        # use bcrypt's check_password_hash method, passing the hash from our database and the password from the form
        if bcrypt.check_password_hash(result[0]['pw_hash'], request.form['password_login']):
            # if we get True after checking the password, we may put the user id in session
            session['id'] = result[0]['id']
            # never render on a post, always redirect!
            return redirect('/success')
    # if we didn't find anything in the database by searching by username or if the passwords don't match,
    # flash an error message and redirect back to a safe route
    flash("You could not be logged in")
    return redirect("/")


@app.route("/success")
def results():
    mysql = connectToMySQL("mydb")
    query = "SELECT first_name, last_name FROM users WHERE id=%(userid)s;" #finds me name of person logged in
    data4 = {
        "userid":session['id']
    }
    username = mysql.query_db(query,data4)
    print(username)

    mysql = connectToMySQL("mydb")
    query = "SELECT COUNT(users_id) FROM messages WHERE send_to=%(userid)s;" #counts messages for user logged in
    data3 = {
        "userid":session['id']
    }
    mymessagecount = mysql.query_db(query,data3)
    
    mysql = connectToMySQL("mydb")
    query = "SELECT COUNT(users_id) FROM messages WHERE users_id=%(userid)s;" #counts messages for user logged in
    data2 = {
        "userid":session['id']
    }
    count = mysql.query_db(query,data2)
    
    mysqlmessage = connectToMySQL("mydb")
    messagequery = "SELECT * FROM messages WHERE send_to = %(userid)s" #select messages relevant to logged in user. passes to success.html as list of dicts named messages
    data = {
        "userid": session['id']
    }
    messages = mysqlmessage.query_db(messagequery, data)


    mysql = connectToMySQL("mydb")
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    print(users)
    print(messages)
    print(users[0]['first_name'])

    return render_template('success.html',messages=messages, users=users, count=count, mymessagecount=mymessagecount, username=username)

@app.route("/sendmessage", methods=['POST'])
def sendmessage(): #insert message content from right side of success page
    
    
    mysql = connectToMySQL("mydb") 
    query = "INSERT INTO messages (users_id, send_to, content, created_at, updated_at) VALUES (%(userid)s,%(send_to)s,%(content)s, NOW(), NOW());" 
    data = {
        "userid": session['id'],
        "send_to": request.form['send_to'],
        "content": request.form['content']
    }
    mysql.query_db(query, data) #Query run and inserted
    return redirect("/success")

@app.route("/deletemessage/<num>")
def deletmessage(num):
    # number=int(num)
    mysql = connectToMySQL("mydb") 
    query = "DELETE FROM messages WHERE id=%(userid)s" 
    data = {
        "userid": num
    }
    mysql.query_db(query, data)
    return redirect("/success")


@app.route("/d")
def destroy():
    session.clear()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
