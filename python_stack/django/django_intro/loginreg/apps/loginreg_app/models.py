from django.db import models
import re

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

class User(models.Model):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    email = models.CharField(max_length = 255, unique=True)
    password = models.CharField(max_length = 255) #only needs 60 for bcrypt
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
