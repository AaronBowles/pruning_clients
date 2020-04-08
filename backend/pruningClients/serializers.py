from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = ('id', 'lastName', 'firstName', 'address', 'city', 'state', 'zip', 'phone', 'email', 'serviceDate', 'pruningHours', 'haulHours','primaryPlants', 'notes')