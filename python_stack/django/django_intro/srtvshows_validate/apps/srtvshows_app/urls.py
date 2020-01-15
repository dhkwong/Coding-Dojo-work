from django.conf.urls import url
from . import views
                    
urlpatterns = [
    url(r'^shows/new/$', views.index), #make new show
    url(r'^shows/$', views.shows), #list all shows
    url(r'^createshow/$', views.createshow), #processes shows/new data
    url(r'^shows/(?P<num>\d+)$', views.viewshow),#displays a show's data
    url(r'^shows/(?P<num>\d+)/edit$', views.editshow), #displays edit page for a show
    url(r'^editingshow/(?P<num>\d+)$', views.editingshow), #edit button in editshow / processes edits for show's data
    url(r'^delete/(?P<num>\d+)$', views.delete), #deletes show
]