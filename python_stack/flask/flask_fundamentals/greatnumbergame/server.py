from flask import Flask, render_template, request, redirect, session
from random import randrange


app = Flask(__name__)
# set a secret key for security purposes
app.secret_key = 'keep it secret, keep it safe'
# our index route will handle rendering our form


@app.route('/redirect', methods=['POST'])
def redirecting():
    # creates keys with default display:none

    session['guess'] = request.form['num']
    
    # refreshes and creates new values for session keys
    if int(session['guess']) < session.get('random'):
        session['toolow'] = ""
        session['toohigh'] = "display:none;"
        session['win'] = "display:none;"
    elif int(session['guess']) > session.get('random'):
        session['toohigh'] = ""
        session['win'] = "display:none;"
        session['toolow'] = "display:none;"
    elif int(session['guess']) == session.get('random'):
        session['win'] = ""
        session['toohigh'] = "display:none;"
        session['toolow'] = "display:none;"
        session['winbutton']=""
        session['hidebutton']="display:none;" #hide the guess number button when you win



    return redirect('/')


@app.route('/')
def numbergame():
    if 'random' in session: 
        return render_template('index.html', toohigh=session.get('toohigh'), toolow=session.get('toolow'), win=session.get('win'))
    else:    
        session['toohigh'] = "display:none;"
        session['toolow'] = "display:none;"
        session['win'] = "display:none;"
        session['winbutton']="display:none;"
        session['hidebutton']=""
        session['random'] = randrange(101)
        return render_template(('index.html'), toohigh=session.get('toohigh'), toolow=session.get('toolow'), win=session.get('win'))
    
   


@app.route('/d')
def destroy():
    session.clear()
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
