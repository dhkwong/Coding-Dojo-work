from flask import Flask, render_template, request, redirect, session
            

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security purposes
# our index route will handle rendering our form


@app.route('/')
def count():
    if 'counter' in session:
        session['counter']=session.get('counter')+1 #if key exists, increment value linked to counter key
    else:
        session['counter']=1 #initialize the key counter in session dict    
    return render_template('index.html')
@app.route('/destroy_session')
def destroy():
    session.pop('counter',0)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)


