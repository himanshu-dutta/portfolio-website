from rest_framework import serializers
from .models import Post

# Serializers define the API representation.


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        lookup_field = 'slug'
