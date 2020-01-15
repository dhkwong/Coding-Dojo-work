from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^processregistration$', views.processregistration),
    url(r'^processlogin$', views.processlogin),
    url(r'^books$', views.books),
    url(r'^addbook$', views.addbook),
    url(r'^addfavorite/(?P<num>\d+)$', views.addfavorite),
    url(r'^unfavorite/(?P<num>\d+)$', views.unfavorite),
    url(r'^books/(?P<num>\d+)$', views.viewbook),
    url(r'^updatebook/(?P<num>\d+)$', views.updatebook),
    url(r'^deletebook/(?P<num>\d+)$', views.deletebook),
    url(r'^logout$', views.logout),
]
