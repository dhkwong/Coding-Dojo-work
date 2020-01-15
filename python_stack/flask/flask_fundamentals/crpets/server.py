from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL
app = Flask(__name__)
@app.route("/")
def index():  # queries and renders info
    mysql = connectToMySQL('test_schema')
    pets = mysql.query_db('SELECT * FROM pets')
    return render_template('index.html', pets=pets)


@app.route("/create_pet", methods=["POST"])
def add_friend_to_db():
    mysql = connectToMySQL("test_schema")
    query = "INSERT INTO pets (name, type, created_at, updated_at) VALUES (%(name)s, %(type)s, NOW(), NOW());"
    data = {
        "name": request.form["name"],
        "type": request.form["type"]

    }
    mysql.query_db(query, data)
    return redirect("/")
    # QUERY: INSERT INTO first_flask (first_name, last_name, occupation, created_at, updated_at)
    #                         VALUES (fname from form, lname from form, occupation from form, NOW(), NOW());


if __name__ == "__main__":
    app.run(debug=True)
