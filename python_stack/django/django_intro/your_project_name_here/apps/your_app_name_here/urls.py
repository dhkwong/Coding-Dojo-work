from django.conf.urls import url
from . import views
                    
urlpatterns = [
    url(r'^$', views.index), #checks for "/" in essence. no name in url. just home aka localhost:8000/
    url(r'^new$', views.new), #checks for name NEW in views aka localhost:8000/new/
]