from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerialize):
    class Meta:
        model = Profile
        fields = ('id', 'username', 'image', 'introduction')
        
class ProfileModifySerializer(serializers.ModelSerialize):
    class Meta:
        model = Profile
        fields = ('image', 'introduction')
