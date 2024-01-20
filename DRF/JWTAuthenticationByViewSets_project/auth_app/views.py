from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .serializers import UserSerializers

# Create your views here.
class UserRegistration(CreateAPIView):
    serializer_class = UserSerializers
    