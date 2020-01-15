import datetime
import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect
from.models import *  # import validator


def index(request):

    return render(request, 'python_belt_app/index.html')


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
        return redirect('/dashboard')


def processlogin(request):
    email = request.POST['login_email']
    try:
        user = User.objects.get(email=email)
    except:
        messages.error(request, "login failed")
        return redirect('/')

    if bcrypt.checkpw(request.POST['login_password'].encode(), user.password.encode()):
        request.session['id'] = user.id
        return redirect('/dashboard')
    else:
        messages.error(request, "login failed")
        return redirect('/')


def dashboard(request):
    user = User.objects.get(id=request.session['id'])
    jobs = Job.objects.all()
    content = {
        "user": user,
        "jobs": jobs
    }
    return render(request, 'python_belt_app/dashboard.html', content)


def startjob(request, num):
    user = User.objects.get(id=request.session['id'])
    job = Job.objects.get(id=num)
    job.done_by = user
    job.save()
    print(job.done_by)
    return redirect('/dashboard')


def giveup(request, num):
    job = Job.objects.get(id=num)
    job.done_by = None
    job.save()

    return redirect('/dashboard')


def newjob(request):
    user = User.objects.get(id=request.session['id'])
    content = {
        "user": user,
    }
    return render(request, 'python_belt_app/newjob.html', content)


def createjob(request):  # clicking submit button in newjob
    errors = Job.objects.jobvalidator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        print(errors)
        return redirect('/jobs/new')
    else:
        user = User.objects.get(id=request.session['id'])
        print(user)
        job = Job.objects.create(
            title=request.POST['title'], description=request.POST['description'], submitted_by=user, location=request.POST['location'])
        
        print(Job.objects.all())
        return redirect('/dashboard')


def editjob(request, num):
    user = User.objects.get(id=request.session['id'])
    job = Job.objects.get(id=num)
    content = {
        "user": user,
        "job": job
    }

    return render(request, 'python_belt_app/editjob.html', content)


def editingjob(request, num):
    errors = Job.objects.jobvalidator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        print(errors)
        return redirect(f'/jobs/edit/{num}')
    else:
        user = User.objects.get(id=request.session['id'])
        print(user)
        job = Job.objects.get(id=num)
        job.title = request.POST['title']
        job.save()
        job.description = request.POST['description']
        job.save()
        job.location = request.POST['location']
        job.save()
        # no need to alter submitted_by, as it will already be inputted

        print(Job.objects.all())
    return redirect('/dashboard')


def viewjob(request, num):
    user = User.objects.get(id=request.session['id'])
    job = Job.objects.get(id=num)
    content = {
        "user": user,
        "job": job
    }

    return render(request, 'python_belt_app/viewjob.html', content)


def remove(request, num):
    job = Job.objects.get(id=num)
    job.delete()
    return redirect('/dashboard')


def logout(request):
    request.session['id'] = ""
    return redirect('/')
