import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect
from.models import *  # import validator


def index(request):
    print("hello I'm in index")
    return render(request, 'loginreg_app/index.html')


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
        try: #tries to create/insert. However, my model for email checks for unique. so if it throws an error we know it's because of unique
            user = User.objects.create(
                first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=hash1)
        except:
            messages.error(request, "this is not a unique email")
            return redirect('/')

        request.session['id'] = user.id
        print(request.session['id'])
        return redirect('/success')


def success(request):
    user = User.objects.get(id=request.session['id'])

    return render(request, 'loginreg_app/success.html', {"user":user})


def processlogin(request):
    email = request.POST['login_email']
    user = User.objects.get(email=email)
    if bcrypt.checkpw(request.POST['login_password'].encode(), user.password.encode()):
        request.session['id'] = user.id
        return redirect('/success')
    else:
        messages.error("login failed")
        return redirect('/')


def logout(request):
    request.session['id'] = ""
    return redirect('/')


# def login checks, creates session id, but also doesn't need to be validated because you'll be checking backend if it exists already

# def logout: request.session['id']=""
