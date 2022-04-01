import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from './services/movies-service.service';
import { Pelicula } from './interfaces/interfaces';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.scss'],
})
export class HomeMoviesComponent implements OnInit {
  movies: Pelicula[] = [];

  populares: Pelicula[] = [];

  stars = Array();

  constructor(private moviesService: MoviesServiceService) {}

  ngOnInit(): void {
    this.moviesService.getFeatures().subscribe((resp: any) => {
      this.movies = resp.results;
      this.movies.forEach((qualify) => {
        this.stars = Array(Math.floor(qualify.vote_average));
      });
    });

    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe((resp) => {
      const arrTemp = [...this.populares, ...resp.results];
      // this.populares = resp.results;
      console.log('POPULARES: ', resp.results);
      this.populares = arrTemp;
    });
  }
}
