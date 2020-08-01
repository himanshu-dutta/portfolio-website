from django.urls import path
from .views import PostListView, PostDetailView

urlpatterns = [
    path('', PostListView.as_view()),
    path('<slug>', PostDetailView.as_view())
]
