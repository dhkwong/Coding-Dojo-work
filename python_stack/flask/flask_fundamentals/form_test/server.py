from flask import Flask, render_template, request, redirect # added request
            

app = Flask(__name__)
# our index route will handle rendering our form
@app.route("/play/<mult>/<color>")
def index(mult,color):
    return render_template("index.html", blue_boxes="style='background-color:"+color+ "; height:200px; width:10%; margin:2%; display:inline-block;'" , times=int(mult))


@app.route("/")
def checker():

    return render_template("index.html", height=4, width=4)

@app.route("/<int:columnnum>")
def checkerwidth(columnnum):
    width= int(columnnum/2)
    int(width)
    return render_template("index.html", height=4, width=width)



@app.route("/<int:width>/<int:height>")
def checkersize(width, height):
    widths=int(width/2)
    int(width)
    heights=int(height/2)
    int(height)
    return render_template("index.html", width=widths, height=heights)


if __name__ == "__main__":
    app.run(debug=True)


