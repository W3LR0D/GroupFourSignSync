"""
Models are used to initalize the fields of the database
"""

from django.db import models

# Create your models here.

# User model containing email and password
class userAccount(models.Model):
    # Email field checks for valid email containing '@' and '.'
    userEmail = models.EmailField(max_length = 200)
    userPassword = models.CharField(max_length = 200)

# Model for containing sign videos and primary keys
class signs(models.Model):
    # Sign name stored as primary key
    signName = models.CharField(max_length = 50)
    # signVideo is currently a string as a placeholder for the signed videos
    signVideo = models.CharField(max_length=50)
