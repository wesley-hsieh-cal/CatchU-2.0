from ast import Index
from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('post/', index),
    path('profile/', index),
]