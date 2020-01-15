from django.conf.urls import url
from . import views
                    
urlpatterns = [
    url(r'^$', views.index),
    url(r'^books/(?P<num>\d+)$', views.bookview),
    url(r'^addbook$', views.addbook),
    url(r'^addauthor/(?P<num>\d+)$', views.addauthor),

    url(r'^authors$', views.authors),#landing author page to list all authors
    url(r'^createauthor$', views.createauthor), #add button in author landing page
    url(r'^authorview/(?P<num>\d+)$', views.authorview),#view individual authors
    url(r'^addbooktoauthor/(?P<num>\d+)$', views.addbooktoauthor), #dropdown form in authors
]