from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView

from blog.models import Post
from blog.serializers import PostSerializer
# Create your views here.


class PostListView(ListAPIView):
    queryset = Post.objects.all().order_by('-datetime')
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )


class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all().order_by('-datetime')
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )
