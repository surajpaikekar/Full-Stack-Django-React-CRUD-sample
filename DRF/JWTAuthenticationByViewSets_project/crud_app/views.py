from django.shortcuts import render
from .serializers import StudentSerializers
from .models import Student
from rest_framework.viewsets import ModelViewSet
# from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser

# Create your views here.
class StudentInfo(ModelViewSet):
    serializer_class = StudentSerializers
    queryset = Student.objects.all()
    # authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    # permission_classes = [IsAuthenticatedOrReadOnly | IsAdminUser]  ## either admin user or authenticated user can have access of crud_app views



## 1) IsAuthenticated class --->> only authenticated user can access the views of crud_app
## 2) IsAuthenticatedReadOnly class ---->>>  It means we access the records of crud_app using Get() but we cannot add record(post), update or delete it
## 3) IsAdminUser ---->>> The Super Admin can have access to crud_view 