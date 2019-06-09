import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '?api_key=d0f74e40968b0bd8263ddbdb035456ec';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies() : Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(baseUrl + '/movie/popular' + apiKey)
  }

  getInTheaterMovies():Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(baseUrl + '/discover/movie' + apiKey + '&with_release_type=2|3')
  }
}
