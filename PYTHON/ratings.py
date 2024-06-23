#biblioteca utilizada
import requests

#se hace el request a una api y se guarda en una variable con formato JSON
website = "https://api.themoviedb.org/3/search/movie?api_key=3b4695ba5913340c50326e95da463ec9&query=$pixar"
data = requests.get(website).json()

#se guarda solo la información que interesa
movies = data['results']

#para cada pelicula obtenida se imprime en consola el titulo y su rating
for movie in movies:
  print(movie['original_title'])
  print(movie['vote_average'])