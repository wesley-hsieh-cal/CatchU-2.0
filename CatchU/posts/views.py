from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import Post
from .serializers import PostSerializer, CreatePostSerializer


class PostView(generics.ListAPIView): # View is set up to return all different Posts
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    
class CreatePostView(APIView):
    serializer_class = CreatePostSerializer
    
    def get(self, request):
        return Response("Data to be returned")
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            content = serializer.data.get('content')
            image = serializer.data.get('image')
            post = Post(user=request.user, title=title, content=content, image=image)
            post.save()
            return Response(PostSerializer(post).data, status=201)
        return Response({}, status=400)
            