from flask import Flask, render_template, request, redirect, flash
from mysqlconnection import connectToMySQL

app = Flask(__name__)
app.secret_key="secret key"
# our index route will handle rendering our form


@app.route("/")
def index():

    return render_template("index.html")


@app.route("/process", methods=['POST'])
def process():
    is_valid = True     # assume True
    if len(request.form['name']) < 1:
        is_valid = False
        flash("Please enter a name")
    if len(request.form['dropdown-location']) < 1:
        is_valid = False
        flash("Please choose a location")
    if len(request.form['dropdown-language']) < 1:
        is_valid = False
        flash("Please choose a language")
    if len(request.form['comments']) > 120:
        is_valid = False
        flash("Please keep comments under 120 characters")
    
    if not is_valid:    # if any of the fields switched our is_valid toggle to False
        return redirect('/')    # redirect back to the method that displays the index pag
    else: 
        mysql = connectToMySQL("test_schema")
        query = "INSERT INTO dojo_survey (name, location, language, comment) VALUES(%(name)s, %(location)s, %(language)s,%(comments)s)"
        data = {
            "name" : request.form["name"],
            "location" : request.form["dropdown-location"],
            "language" : request.form["dropdown-language"],
            "comments" : request.form["comments"]
        }
        insertid=str(mysql.query_db(query, data)) #insert returns the ROW ID aka id of that particular row. hence user id
        
    return redirect("/results/"+insertid)


@app.route("/results/<num>")
def results(num):
    
    mysql = connectToMySQL("test_schema")
    query = "SELECT * FROM dojo_survey WHERE id=%(userid)s"
    data = {
        "userid":num

    }
    user=mysql.query_db(query,data)
    return render_template('results.html',user=user)


if __name__ == "__main__":
    app.run(debug=True)
