from rest_framework import serializers
from movies.models import Movie, Director

class DirectorSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Director
        fields = ('name', 'is_arrogant_jerk', 'movies')

class MovieSerializer(serializers.HyperlinkedModelSerializer):
    # director = DirectorSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = ('id', 'url', 'title', 'year', 'director')
        # fields = "__all__"