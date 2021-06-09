from rest_framework.generics import ListAPIView,RetrieveAPIView
from frontend.models import Data
from .serializers import DataSerializer

class DataListView(ListAPIView):
    queryset=Data.objects.all()
    serializer_class=DataSerializer

class DataDetailView(RetrieveAPIView):
    queryset=Data.objects.all()
    serializer_class=DataSerializer