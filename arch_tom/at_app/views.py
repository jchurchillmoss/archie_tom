from django.shortcuts import render
from django.views.generic import View, TemplateView, ListView, DetailView, UpdateView
from at_app import models
from django.conf import settings

# Create your views here.
class Index(TemplateView):
    template_name='index.html'

class Gigs(ListView):
    template_name='gigs.html'
    model = models.Date

    def get_context_data(self,**kwargs):
        context=super().get_context_data(**kwargs)
        context['dates']=models.Date.objects.all()
        return context

class Epk(TemplateView):
    template_name='epk.html'

class Watchlisten(TemplateView):
    template_name='watchlisten.html'
