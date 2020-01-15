from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'


@app.route('/')
def index():  # instantiate variables and add to session dictionary
    if 'total_gold'not in session:
        session['total_gold'] = 0
    if 'activities' not in session:
        session['activities'] = [""] #creates a list for activities
    return render_template("index.html")



@app.route('/process_money', methods=['POST'])  # logic for money adding
def process_money():
    # logic per button
    if request.method == 'POST':
        # get gold is the input name='get gold' 'farm' is value='farm' which won't change the button display, because you use<button name='get gold' value='farm'>farm</button>
        if request.form['getgold'] == 'farm':
            # increment by farm logic
            result=random.randrange(10, 20)
            int(result)
            session['total_gold']+=result
            appending="you've added "+str(result)
            appendsession=session['activities']
            appendsession.append(appending)
            session['activities']=appendsession
            print(session['activities'])
            return redirect('/')

        elif request.form['getgold'] == 'cave':
            # increment by cave logic
            result=random.randrange(5, 10)
            int(result)
            session['total_gold']+=result
            appending="you've added "+str(result)
            appendsession=session['activities']
            appendsession.append(appending)
            session['activities']=appendsession
            print(session['activities'])
        elif request.form['getgold'] == 'house':
            # increment by house logic
            result=random.randrange(2, 5)
            int(result)
            session['total_gold']+=result
            appending="you've added "+str(result)
            appendsession=session['activities']
            appendsession.append(appending)
            session['activities']=appendsession
            print(session['activities'])
        elif request.form['getgold'] == 'casino':
            result=random.randrange(-50, 50)
            int(result)
            session['total_gold']+=result
            if result >= 0:
                appending="you've added "+str(result)
                appendsession=session['activities']
                appendsession.append(appending)
                session['activities']=appendsession
                print(session['activities'])
            else:
                appending="you've subtracted"+str(result)
                appendsession=session['activities']
                appendsession.append(appending)
                session['activities']=appendsession
                print(session['activities'])
    # redirects to home after processing which button was pressed
    return redirect('/')

@app.route('/d')
def destroy():
    session.clear()
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
