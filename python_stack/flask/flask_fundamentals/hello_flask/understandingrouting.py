from flask import Flask
app=Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello World!"

@app.route("/dojo")
def dojo():
    return "Dojo!"

@app.route("/flask")
def flask():
    return "Flask!"

@app.route("/michael")
def michael():
    return "Michael"

@app.route("/john")
def john():
    return "John" 
@app.route("/repeat/<number>/hello")
def repeathello(number):
    if type(int(number))!= int:
        return "please submit a number"
    return ("hello"*int(number))

@app.route("/repeat/<number>/bye")
def repeatbye(number):
    if type(int(number))!= int:
        return "please submit a number"
    return ("bye"*int(number))

@app.route("/repeat/<number>/dogs")
def repeatdogs(number):
    if type(int(number))!= int:
        return "please submit a number"
    return ("dogs"*int(number))


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.