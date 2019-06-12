import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];
  singleMovie: Movie;

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data;
    });
    this.movieService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data;
    });
    this.movieService.getPopularKidsMovies().subscribe(data => {
      this.popularKidsMovies = data;
    });
    this.movieService.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies =data;
    });
  }
}
