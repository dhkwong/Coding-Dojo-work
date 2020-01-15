from flask import Flask, render_template, request, redirect # added request
            

app = Flask(__name__)
# our index route will handle rendering our form


@app.route("/")
def index():

    return render_template("index.html")
@app.route("/results", methods=['POST'])
def results():
    print(request.form)
    name=request.form["name"]
    locationselect= request.form["dropdown-location"]
    language=request.form["dropdown-language"]
    comments=request.form["comments"]

    return render_template('results.html',name=name, location=locationselect, language=language, comments=comments)




if __name__ == "__main__":
    app.run(debug=True)


