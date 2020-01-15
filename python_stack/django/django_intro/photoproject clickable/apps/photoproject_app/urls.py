from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^$', views.index),
    url(r'^profile/edit/(?P<num>\d+)$', views.editjob),
    url(r'^photos/edit/(?P<num>\d+)$', views.editjob),
]   

    # url(r'^jobs/edit/(?P<num>\d+)$', views.editjob),
    # url(r'^editingjob/(?P<num>\d+)$', views.editingjob), #submit on edit job page
    # url(r'^jobs/(?P<num>\d+)$', views.viewjob),
    # url(r'^remove/(?P<num>\d+)$', views.remove),
    # url(r'^startjob/(?P<num>\d+)$', views.startjob), #add button in dashboard tables
    # url(r'^giveup/(?P<num>\d+)$', views.giveup),
    # url(r'^logout$', views.logout),