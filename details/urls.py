from django.urls import path
from .views import DetailView

urlpatterns = [
    path('<slug>', DetailView.as_view())
]
