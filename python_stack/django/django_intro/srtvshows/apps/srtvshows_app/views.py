from datetime import datetime
from django.shortcuts import render, redirect
from.models import *


# Create your views here.


def index(request):
    return render(request, 'srtvshows_app/index.html')


def shows(request):
    shows = Show.objects.all()
    return render(request, 'srtvshows_app/shows.html', {"shows": shows})


def createshow(request):
    newshow = Show.objects.create(title=request.POST['title'], network=request.POST['network'],
                                  date=request.POST['date'], desc=request.POST['description'])
    print(newshow)
    return redirect(f'/shows/{newshow.id}')


def viewshow(request, num):
    show = Show.objects.get(id=num)
    # get the info of show at id
    return render(request, 'srtvshows_app/viewshow.html', {"show": show})


def editshow(request, num):
    show = Show.objects.get(id=num)
    return render(request, 'srtvshows_app/editshow.html', {"show": show})


def editingshow(request, num):

    show = Show.objects.get(id=num)

    if request.POST['title'] != "":
        show.title = request.POST['title']
        show.save()
    if request.POST['network'] != "":
        show.network = request.POST['network']
        show.save()
    # if request.POST['date'] == "": #no need for this function, it automatically leaves it alone if you don't update
    #     show.date = None
    #     show.save()
    if request.POST['description'] != "":
        show.desc = request.POST['description']
        show.save()
    show.updated_at = datetime.now()
    show.save()
    return redirect(f'/shows/{show.id}')


def delete(request, num):
    show = Show.objects.get(id=num)
    show.delete()
    return redirect('/shows')
