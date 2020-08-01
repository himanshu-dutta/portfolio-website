from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.


class Skill(models.Model):
    title = models.CharField(max_length=50, primary_key=True)
    slug = models.SlugField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Skill, self).save(*args, **kwargs)

    class Meta:
        ordering = ['slug']

    def __str__(self):
        return self.title


class Detail(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()

    # needed details

    # landing
    placeholder = models.CharField(max_length=500)
    profile = models.ImageField(upload_to='photos/profile')
    what_i_do = models.TextField()

    # about
    more_about_me = models.TextField()
    top_skills = models.ManyToManyField(Skill)
    social = models.ImageField(upload_to="photos/social")

    def __str__(self):
        return self.title
