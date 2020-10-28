from django.db import models

class Date(models.Model):
    name = models.CharField(max_length=100,null=True, blank=True)
    day = models.CharField(max_length=100,null=True, blank=True)
    month = models.CharField(max_length=100,null=True, blank=True)
    year = models.CharField(max_length=100,null=True, blank=True)
    town = models.CharField(max_length=100,null=True, blank=True)
    venue = models.CharField(max_length=100,null=True, blank=True)
    ticket = models.CharField(max_length=100,null=True, blank=True)

    def __str__(self):
        return self.name
