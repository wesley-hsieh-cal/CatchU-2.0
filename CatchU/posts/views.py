from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer

class PostView(generics.ListAPIView): # View is set up to return all different Posts
    queryset = Post.objects.all()
    serializer_class = PostSerializer