from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
from tinymce import HTMLField


# Create your models here.


class Tag(models.Model):
    title = models.CharField(max_length=50, primary_key=True)
    slug = models.SlugField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Tag, self).save(*args, **kwargs)

    class Meta:
        ordering = ['slug']

    def __str__(self):
        return self.title


class Post(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    tags = models.ManyToManyField(Tag)
    thumbnail = models.ImageField(upload_to='photos/%Y%m%d')
    intro = models.CharField(max_length=150)

    datetime = models.DateTimeField(auto_now_add=True)
    content = HTMLField()

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = Post.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Post.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
