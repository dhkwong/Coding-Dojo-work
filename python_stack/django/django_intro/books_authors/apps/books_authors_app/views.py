from django.shortcuts import render, redirect
from.models import *
# Create your views here.

# from .models import Foo EXAMPLE QUERY
# def some_name(request):
#     foo_instance = Foo.objects.create(name='test')
#     return render(request, 'some_name.html.html')


def index(request):
    this_book = Book.objects.all()

    return render(request, 'books_authors_app/index.html', {"book": this_book})


def bookview(request, num):
    book = Book.objects.get(id=num)
    author = Author.objects.all()
    context = {
        "book": book,
        "authors": author

    }
    # authorfilter = Book.authors.all().values()
    # lst = []
    # for i in authorfilter:
    #     lst.append(i['id'])

    # addauthors = Author.objects.exclude(id=lst)
    print(author)
    return render(request, 'books_authors_app/bookview.html', context)


def addbook(request):
    Book.objects.create(
        title=request.POST['inputtitle'], desc=request.POST['inputdescription'])
    return redirect('/')


def addauthor(request, num):
    # get the author selected in the dropdown. authorname returns author id. Yeah.
    addauthor = Author.objects.get(id=request.POST['authorname'])
    # we pass in the book id in question from bookview, and use it to choose the book in question.
    addbook = Book.objects.get(id=num)
    # then we pass the book object to author under the "books" column in models
    added = addauthor.books.add(addbook)
    print(added)
    return redirect('/')


def authors(request):
    this_author = Author.objects.all()
    return render(request, 'books_authors_app/authors.html', {"authors": this_author})


def createauthor(request):
    Author.objects.create(first_name=request.POST['inputfirstname'], last_name=request.POST['inputlastname'], notes=request.POST['inputnotes'])
    # Author.objects.create( first_name=request.POST['inputfirstname'], last_name=request.POST['inputlastname'], notes=request.POST['inputnotes'])
    return redirect('/authors')
def authorview(request, num):
    author = Author.objects.get(id=num)
    book = Book.objects.all()
    context = {
        "book": book,
        "authors": author
    }
    return render(request, 'books_authors_app/authorview.html', context)
def addbooktoauthor(request, num):
    addbook = Book.objects.get(id=request.POST['bookid'])
    # we pass in the book id in question from bookview, and use it to choose the book in question.
    addauthor = Author.objects.get(id=num)
    # then we pass the book object to author under the "books" column in models
    added = addbook.authors.add(addauthor)
    print(added)
    return redirect('/authors')

