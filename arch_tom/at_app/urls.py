from django.urls import path, include
from at_app import views

app_name = 'arch_tom'

urlpatterns = [
    path('',views.Index.as_view(),name='index'),
    path('gigs/',views.Gigs.as_view(),name='gigs'),
    path('epk/',views.Epk.as_view(),name='epk'),
    path('watchlisten/',views.Watchlisten.as_view(),name='watchlisten'),
]
