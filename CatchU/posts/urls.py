from django.urls import path
from .views import PostView, CreatePostView

urlpatterns = [
    path('create/', CreatePostView.as_view()),
    path('', PostView.as_view())
]