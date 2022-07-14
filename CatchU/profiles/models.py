from django.db import models
# from django.conf import settings

class Profile(models.Model):
    '''
    username: The user who make this Post. The username must be unique with 20 chars maximum.
    introduction: A description that user introduce themselves. 200 character max.
    image: A profile picture for user. It is optional.
    timestamp: When did the user be created
    '''
    username = models.CharField(max_length=20, unique=True)
    introduction = models.TextField(max_length = 200, blank=True, null=True)
    image = models.FileField(upload_to='images/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    