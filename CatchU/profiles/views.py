from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import Profile
from .serializers import ProfileSerializer, ModifyProfileSerializer

class ProfileView(APIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    