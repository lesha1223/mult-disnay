from django.db import models

class Film(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image=models.ImageField(upload_to='img/')