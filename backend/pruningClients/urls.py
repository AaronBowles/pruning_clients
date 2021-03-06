from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('', views.ClientList.as_view(), name='client_list'),
    path('clients', views.ClientList.as_view(), name='client_list'),
    path('clients/<int:pk>', views.ClientDetail.as_view(), name='client_detail'),
]
