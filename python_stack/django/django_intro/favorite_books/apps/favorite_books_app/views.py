import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect
from.models import *  # import validator
import datetime


def index(request):
    print("hello I'm in index")
    return render(request, 'favorite_books_app/index.html')


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
        return redirect('/books')


def processlogin(request):
    email = request.POST['login_email']
    user = User.objects.get(email=email)
    if bcrypt.checkpw(request.POST['login_password'].encode(), user.password.encode()):
        request.session['id'] = user.id
        return redirect('/books')
    else:
        messages.error("login failed")
        return redirect('/')


def books(request):
    user = User.objects.get(id=request.session['id'])
    books = Book.objects.all()
    content = {
        "user": user,
        "books": books
    }   

    return render(request, 'favorite_books_app/books.html', content)


def addbook(request):
    errors = Book.objects.bookvalidator(request.POST)
    print(errors)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        print(errors)
        return redirect('/books')
    else:        
        user = User.objects.get(id=request.session['id'])
        book = Book.objects.create(
            title=request.POST['title'], description=request.POST['description'], uploaded_by=user)
        book.users_who_like.add(user)
        print(book)
    return redirect('/books')

def viewbook(request, num):
    book = Book.objects.get(id=num)
    user = User.objects.get(id=request.session['id'])
    content = {
        "user" : user,
        "book" : book
    }
    if request.session['id']== book.uploaded_by.id:
        return render(request, 'favorite_books_app/editbook.html',content) #if the person logged in is the creator of the book, load the editbook page, that allows editing
    else:
        return render(request, 'favorite_books_app/viewbook.html',content)# else, they're not the creator. so load the standard viewbook page

def updatebook(request,num): #update button on the editing page of a book
    book = Book.objects.get(id=num)
    book.title = request.POST['title']
    book.save()
    book.description = request.POST['description']
    book.save()
    book.updated_at = datetime.datetime.now()
    #if request.POST['update']:
    return redirect('/books')

def deletebook(request,num): #delete button on the editing page of a book
    book = Book.objects.get(id=num)
    book.delete()
    return redirect('/books')
    

def addfavorite(request, num):
    book = Book.objects.get(id = num)
    user = User.objects.get(id=request.session['id'])
    book.users_who_like.add(user)
    return redirect('/books')

def unfavorite(request, num):
    book = Book.objects.get(id = num)
    user = User.objects.get(id=request.session['id'])
    book.users_who_like.remove(user)
    return redirect(f'/books/{book.id}')

def logout(request):
    request.session['id'] = ""
    return redirect('/')
