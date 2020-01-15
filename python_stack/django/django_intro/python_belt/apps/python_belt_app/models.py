from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):

    def validator(self, postData):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        # checks for at least 8 characters
        PASSWORD_REGEX = re.compile(r'[a-zA-Z0-9@#$%^&+=]{8,}')
        # checks for upper and lower case letters, and at LEAST 2 characters
        errors = {}
        if len(postData['first_name'])<2:
            errors['first_name'] = "first_name must be at least 2 characters long"
        if len(postData['last_name'])<2:
            errors['last_name'] = "last_name must be at least 2 characters long"
        if not PASSWORD_REGEX.match(postData['password']):
            errors['password'] = "password must be at least 8 characters"
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "email must be a valid email"
        if postData['confirm_password'] != postData['password']:
            errors['confirm_password'] = "confirmed password must be the same "
        return errors
    def jobvalidator(self, postData):
        errors={}
        if len(postData['title']) < 3:
            errors['title'] = "The title must be at least 3 characters long"
        if len(postData['description']) < 3:
            errors['Description'] = "The Description must be at least 3 characters long"
        if len(postData['location']) < 3:
            errors['Location'] = "The Location must be at least 3 characters long"

        return errors


class User(models.Model):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    email = models.CharField(max_length = 255, unique=True)
    password = models.CharField(max_length = 255) #only needs 60 for bcrypt
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    #jobs_submitted
    #doing

class Category(models.Model):
    category_name= models.CharField(max_length = 255)
    #job

class Job(models.Model):
    title = models.CharField(max_length= 150)
    submitted_by = models.ForeignKey(User, related_name="jobs_submitted") 
    description = models.TextField(default="")
    location = models.CharField(max_length = 250, default="")
    done_by = models.ForeignKey(User, related_name = "doing", blank = True, null = True) # for black belt where you ADD to user
    categories = models.ManyToManyField(Category, related_name="job")
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    
