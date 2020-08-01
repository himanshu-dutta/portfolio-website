from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView

from details.models import Detail
from details.serializers import DetailSerializer
# Create your views here.


class DetailView(RetrieveAPIView):
    queryset = Detail.objects.all().order_by('id')
    serializer_class = DetailSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )
