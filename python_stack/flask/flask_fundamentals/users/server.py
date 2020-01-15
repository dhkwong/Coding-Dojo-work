from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL
app = Flask(__name__)


@app.route("/users/new")
def usersnew():
    return render_template('index.html')
# starts at home, submits form to /processnewuser ,which inserts into db and redirects to a page listing users


@app.route("/processnewuser", methods=['POST'])
def processnewuser():
    mysql = connectToMySQL("test_schema")
    query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (%(first_name)s,%(last_name)s, %(email)s, NOW(), NOW());"
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"]
    }
    mysql.query_db(query, data)
    return redirect("/users")


@app.route("/users")
def userlist():
    mysql = connectToMySQL('test_schema')
    users = mysql.query_db('SELECT * FROM users')
    return render_template('userlist.html', users=users)  # pulls userlist.html


@app.route("/users/<num>")
def userdetails(num):
    userid = int(num)

    mysql = connectToMySQL("test_schema")
    query = "SELECT * FROM users WHERE id = %(userid)s;"
    data = {
        "userid": userid
    }
    user = mysql.query_db(query, data)
    print(user)

    return render_template('userdata.html', user=user)

@app.route("/users/<num>/edit")
def edituser(num):
    userid =int(num)
    mysql = connectToMySQL("test_schema")
    query = "SELECT * FROM users WHERE id = %(userid)s;"
    data = {
        "userid": userid
    }
    user=mysql.query_db(query, data)[0]
    
    # [{"name": "asdlkjasd", "email": "asdlkalsdk"}]
    print(user)
    return render_template('edituser.html', user=user)

@app.route("/editingusers/<num>", methods=['POST'])
def editinguser(num):
    userid=int(num)
    mysql = connectToMySQL("test_schema")
    query = "Update users SET first_name=%(first_name)s, last_name=%(last_name)s, email=%(email)s, created_at=NOW(), updated_at=NOW() WHERE id=%(userid)s;"
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "email": request.form["email"],
        "userid": userid
    }
    mysql.query_db(query, data)
    
    return redirect("/users/"+num)
@app.route("/users/<num>/delete")
def deletinguser(num):
    userid=int(num)
    mysql = connectToMySQL("test_schema")
    query="DELETE FROM users where id=%(userid)s"
    data={
        "userid":userid
    }
    mysql.query_db(query,data)
    return redirect("/users") #deletes and reroutes to list of users
    



if __name__ == "__main__":
    app.run(debug=True)
