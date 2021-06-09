from django.urls import path

from .views import DataDetailView,DataListView

urlpatterns = [
    path('',DataListView.as_view()),
    path('<pk>',DataDetailView.as_view())
]