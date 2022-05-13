from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import Post
from .serializers import PostSerializer, CreatePostSerializer


class PostView(generics.ListAPIView): # View is set up to return all different Posts
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class CreatePostView(APIView):
    serializer_class = CreatePostSerializer
    
    def get(self, request):
        return Response("Data to be returned")
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        data = request.data
        serializer = self.serializer_class(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response({}, status=400)
            