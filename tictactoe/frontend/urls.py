from django.urls import path
from . import views
urlpatterns = [
    path('', views.index ),
    path(r'api/teest/', views.teest ),
]