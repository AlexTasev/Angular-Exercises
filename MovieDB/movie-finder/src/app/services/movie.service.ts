import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Movie from '../models/Movie';
import MovieDetails from '../models/Movie-Details';

const apiKey = '&api_key=d0f74e40968b0bd8263ddbdb035456ec';
const apiKeyAlt = '?api_key=d0f74e40968b0bd8263ddbdb035456ec';

const baseUrl = 'https://api.themoviedb.org/3/';
const popularUrl = 'discover/movie?sort_by=popularity.desc';
const inTheaterUrl = `discover/movie?primary_release_date.gte=2019-05-15&primary_release_date.lte=2019-06-12`;
const kidsMoviesUrl = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const bestDramaUrl = 'discover/movie?with_genres=18&primary_release_year=2019';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(baseUrl + popularUrl + apiKey)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      )
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(baseUrl + inTheaterUrl + apiKey)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      )
  }

  getPopularKidsMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(baseUrl + kidsMoviesUrl + apiKey)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      )
  }

  getBestDramaMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(baseUrl + bestDramaUrl + apiKey)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      )
  }

  getMovieById(id:string) {
    return this.http.get<MovieDetails>(baseUrl + `movie/${id}` + apiKeyAlt)
  }
}
