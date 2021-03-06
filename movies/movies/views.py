from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from movies.models import Movie, Director
from movies.serializers import MovieSerializer, DirectorSerializer
from django.shortcuts import render
from rest_framework import filters

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'movies': reverse('movies', request=request, format=format),
        'directors': reverse('directors', request=request, format=format)
    })

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'year')

    # def get_queryset(self):
    #     query_set = Movie.objects.all()
    #     # when a dictionary you can use get to search for something and if its not there you can give it
    #     # a default value of None or anything else
    #     keyword = self.request.query_params.get('search', None)
    #     if keyword is not None:
    #         print("query params", keyword)
    #         query_set = query_set.filter(title__icontains=keyword)
    #     return query_set


class DirectorViewSet(viewsets.ModelViewSet):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer

    def get_queryset(self):
      query_set = Director.objects.all()
      # print("query", query_set[0])
      keyword = self.request.query_params.get('jerk', None)
      if keyword is not None:
        query_set = query_set.filter(is_arrogant_jerk=True)
      return query_set


# Create your views here.
