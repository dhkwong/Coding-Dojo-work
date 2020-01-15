from django.shortcuts import render, HttpResponse
def index(request):
    return HttpResponse("this is the equivalent of @app.route('/')!")
# Create your views here.
def new(request):
    return HttpResponse("new page from first app /new/")