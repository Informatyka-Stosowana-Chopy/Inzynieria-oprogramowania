from rest_framework import serializers
from frontend.models import Data
class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model=Data
        fields=('product','price')