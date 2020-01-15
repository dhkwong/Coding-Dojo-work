from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
import re

app = Flask(__name__)
app.secret_key="secret key"
# our index route will handle rendering our form
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route("/")
def index():
    # session['valid'] = "display:none;"
    # session['invalid'] = "display:none;"
    return render_template("index.html")


@app.route("/process", methods=['POST'])
def process():
    session['valid'] = "display:none;"
    session['invalid'] = "display:none;"
    is_valid = True     # assume True

    if len(request.form['email']) < 1:
        session['invalid'] = ""
        is_valid = False
        flash("Email cannot be blank!")
    if not EMAIL_REGEX.match(request.form['email']):    # test whether a field matches the pattern
        session['invalid'] = ""
        is_valid = False
        flash("Invalid email address!")
    if not is_valid:    # if any of the fields switched our is_valid toggle to False

        return redirect('/')    # redirect back to the method that displays the index page
    
    else: 
        session['valid'] = ""
        flash("Email address added!")
        mysql = connectToMySQL("test_schema")
        query = "INSERT INTO email_validation (email, created_at) VALUES(%(email)s,NOW())"
        data = {
            "email" : request.form["email"],
        }
        mysql.query_db(query, data) #insert returns the ROW ID aka id of that particular row. hence user id
        
    return redirect("/success")


@app.route("/success")
def results():
    
    mysql = connectToMySQL("test_schema")
    query = "SELECT * FROM email_validation"
    emails = mysql.query_db(query)
    print(emails)
    return render_template('success.html',emails = emails)

@app.route("/d/<num>")
def deletemessage(num):
    delete message at id=num


if __name__ == "__main__":
    app.run(debug=True)
