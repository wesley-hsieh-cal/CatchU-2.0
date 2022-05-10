from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'likes'] # May need to expanded
    
    