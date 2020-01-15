from django.conf.urls import url
from . import views
                    
urlpatterns = [
    url(r'^$', views.index), #checks for "/" in essence. no name in url. just home aka localhost:8000/
    url(r'^new$', views.new), #checks for name NEW in views aka localhost:8000/new/
    url(r'^create$', views.create), # checks for 'create' method
    url(r'^(?P<number>[0-9]+)$', views.show), #<num> HAS to match the var name in app.views.py method
    url(r'^(?P<number>[0-9]+)/edit$', views.edit),
    url(r'^destroy$', views.destroy),
]