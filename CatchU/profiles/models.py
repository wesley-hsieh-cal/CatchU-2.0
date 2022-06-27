from django.db import models
from django.conf import settings

# Create your models here.
class Profile(models.Model):
    '''
    username: The user who make this Post
    title: The title of the post. Should have length restriction?
    content: The content of the post.
    image: The image that people could update. It should be optional. Maybe make it in the future #TODO
    likes: The number of people that like this posts. One person/account can only like once. Maybe people can like or dislike 
           (can only like or dislike a post) -> allow negative numbers of likes
    timestamp: When did the post be created
    category: The category/forums this post belongs to. Maybe make it in the fututre #TODO
    '''
    username = models.CharField(max_length=20)
    introduction = models.TextField(blank=True, null=True)
    image = models.FieldFile(upload_to='images/', blank=True, null=True)