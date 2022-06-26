from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class PostLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey("Post", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

# Create your models here.
class Post(models.Model):
    '''
    user: The user who make this Post
    title: The title of the post. Should have length restriction?
    content: The content of the post.
    image: The image that people could update. It should be optional. Maybe make it in the future #TODO
    likes: The number of people that like this posts. One person/account can only like once. Maybe people can like or dislike 
           (can only like or dislike a post) -> allow negative numbers of likes
    created_at: When did the post be created
    updated_at: when did the post be updated
    category: The category/forums this post belongs to. Maybe make it in the fututre #TODO
    '''
    user = models.ForeignKey(User, on_delete=models.CASCADE) # many users can have many posts
    title = models.TextField(null=True, max_length=100)
    content = models.TextField(blank=True, null=True, max_length=5000)
    image = models.FileField(upload_to='images/', blank=True, null=True)
    likes = models.ManyToManyField(User, related_name='post_user', blank=True, through=PostLike)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)

