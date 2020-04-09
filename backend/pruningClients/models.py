from django.db import models
from django.contrib.postgres.fields import JSONField
# Create your models here.

class Client(models.Model):
    lastName = models.CharField(max_length=100)
    firstName = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip = models.IntegerField()
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    serviceDate = JSONField(default=dict)
    pruningHours = JSONField(default=dict)
    haulHours = JSONField(default=dict)
    primaryPlants = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return self.lastName