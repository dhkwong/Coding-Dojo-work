import googlemaps
from datetime import datetime
import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect
import requests
from.models import *  # import validator


def index(request):

    return render(request, 'photoproject_app/index.html')


def processregistration(request):

    errors = User.objects.validator(request.POST)
    request.session['id'] = ""
    print(errors)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        print(errors)
        return redirect('/')
    else:
        hash1 = bcrypt.hashpw(
            request.POST['password'].encode(), bcrypt.gensalt())
        print(hash1)
        try:  # tries to create/insert. However, my model for email checks for unique. so if it throws an error we know it's because of unique
            user = User.objects.create(
                first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=hash1)
        except:
            messages.error(request, "this is not a unique email")
            return redirect('/')

        request.session['id'] = user.id
        print(request.session['id'])
        return redirect('/myprofile')


def processlogin(request):
    email = request.POST['login_email']
    try:
        user = User.objects.get(email=email)
    except:
        messages.error(request, "login failed")
        return redirect('/')

    if bcrypt.checkpw(request.POST['login_password'].encode(), user.password.encode()):
        request.session['id'] = user.id
        return redirect('/myprofile')
    else:
        messages.error(request, "login failed")
        return redirect('/')


def myprofile(request):

    return render(request, 'photoproject_app/profile.html')


def search(request):

    return render(request, 'photoproject_app/search.html')


def photos(request):
    gmaps = googlemaps.Client(key='AIzaSyBFYJUbY0Up_4yUHO0zGA9Gp0bbhNnS1R8')

    # Geocoding an address geocode api <-check documentation for viability of this project
    geocode_result = gmaps.geocode(
        '1600 Amphitheatre Parkway, Mountain View, CA')

    # Look up an address with reverse geocoding
    reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))

    # Request directions via public transit
    now = datetime.now()
    directions_result = gmaps.directions("Sydney Town Hall",
                                         "Parramatta, NSW",
                                         mode="transit",
                                         departure_time=now)

    content = {
        "georesult": geocode_result,
        "reversegeo": reverse_geocode_result,
        "directions": directions_result
    }
    # look for google import polyline decoder. The directions api returns polyline.Check if you even WANT the directions api. decoder gives back [(40.63179, -8.65708), (40.62855, -8.65693)] in (lat, lon) order. then you'll have to display it somehow.
    return render(request, 'photoproject_app/photos.html', content)


def editprofile(request):
    return render(request, 'photoproject_app/editprofile.html')


def editphotos(request):
    return render(request, 'photoproject_app/editphotos.html')


def logout(request):
    request.session['id'] = ""
    return redirect('/')
