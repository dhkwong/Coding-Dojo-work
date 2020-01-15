from datetime import datetime
from django.shortcuts import render, redirect
from.models import *
from django.contrib import messages


# Create your views here.


def index(request):
    return render(request, 'srtvshows_app/index.html')


def shows(request):
    shows = Show.objects.all()
    return render(request, 'srtvshows_app/shows.html', {"shows": shows})


def createshow(request):
    errors = Show.objects.validator(request.POST)
    if len(errors)>0:
        for key,value in errors.items():
            messages.error(request, value)
        return redirect('/shows/new/')

    else:
        newshow = Show.objects.create(title=request.POST['title'], network=request.POST['network'],
                                    date=request.POST['date'], desc=request.POST['description'])
        messages.success(request, "Blog successfully updated")
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

    errors = Show.objects.validator(request.POST) #pass ALL the POST data from the page into the validator we created
    if len(errors)>0:
        for key,value in errors.items():
            messages.error(request, value)
        return redirect(f'/shows/{num}/edit')

    else:

        show = Show.objects.get(id=num)

        show.title = request.POST['title']
        show.save()

        show.network = request.POST['network']
        show.save()

        show.desc = request.POST['description']
        show.save()
        show.updated_at = datetime.now()
        show.save()
    return redirect(f'/shows/{show.id}')


def delete(request, num):
    show = Show.objects.get(id=num)
    show.delete()
    return redirect('/shows')
