from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    session['username'] = request.form['name'] #using session here allows us to SAVE the username, email, and counter
    session['useremail'] = request.form['email']
    session['counter']=0
    return redirect("/show")

@app.route('/show')
def show_user():
    
    session['counter']=session.get('counter')+1
    
    print("Showing the user info from the form")
    print(session['username'], session['useremail'], session['counter'])
    print(session.get('counter'))
    return render_template("show.html", counter=session['counter'])







if __name__=="__main__":
    app.run(debug=True)