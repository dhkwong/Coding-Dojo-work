import datetime
import bcrypt
from django.contrib import messages
from django.shortcuts import render, redirect
from.models import *  # import validator


def index(request):
    return render(request, 'photoproject_app/index.html')
