from django.urls import path
from . import views
urlpatterns = [
    path('', views.index ),
    path('api/teest/', views.teest ),
]