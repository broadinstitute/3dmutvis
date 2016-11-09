from django.conf.urls import url

from api import views

urlpatterns = [
    url(r'^api/(?P<strmodel>[A-Za-z0-9]+)/(?P<attrname>[A-Za-z0-9]+)=(?P<attrval>[A-Za-z0-9]+)/', views.getModelByAttr),
]

