from django.db import models

# Create your models here.

class Clients(models.Model):
    lastName = models.CharField(max_length=100)
    firstName = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip = models.IntegerField()
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    
