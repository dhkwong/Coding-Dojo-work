from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string 

def index(request):
    if 'counter' not in request.session:
        request.session['counter'] = 1
    randomnum = get_random_string(length=14)
    print(randomnum)
    return render(request, "randomwordgenerator_app/index.html", {'randomnum': randomnum})
def generate(request):
    request.session['counter']+=1
    return redirect("/")

def reset(request):
    request.session['counter']=0
    return redirect("/")