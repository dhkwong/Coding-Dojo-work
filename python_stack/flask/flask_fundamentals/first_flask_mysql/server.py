from flask import Flask, render_template, request, redirect,flash
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = "keep it secret"
@app.route("/")
def index():
    mysql = connectToMySQL('test_schema')
    friends = mysql.query_db('SELECT * FROM test_table')  # call the query_db function, pass in the query as a string
    
    print(friends)
    return render_template("index.html",all_friends = friends)

@app.route("/create_friend", methods=["POST"])
def add_friend_to_db():
    is_valid = True     # assume True
    if len(request.form['fname']) < 1:
        is_valid = False
        flash("Please enter a first name")
    if len(request.form['lname']) < 1:
        is_valid = False
        flash("Please enter a last name")
    if len(request.form['occ']) < 2:
        is_valid = False
        flash("Occupation should be at least 2 characters")
    
    if not is_valid:    # if any of the fields switched our is_valid toggle to False
        return redirect('/')    # redirect back to the method that displays the index pag
    else: 
        mysql= connectToMySQL("test_schema")
        query= "INSERT INTO test_table (first_name, last_name, occupation, created_at, updated_at) VALUES (%(fn)s, %(ln)s, %(occup)s, NOW(), NOW());"
        data = {
            "fn": request.form["fname"],
            "ln": request.form["lname"],
            "occup": request.form["occ"]
        }
        mysql.query_db(query,data)
        flash("Friend successfully added!")
    return redirect("/")
    # QUERY: INSERT INTO first_flask (first_name, last_name, occupation, created_at, updated_at) 
    #                         VALUES (fname from form, lname from form, occupation from form, NOW(), NOW());

if __name__ == "__main__":
    app.run(debug=True)
