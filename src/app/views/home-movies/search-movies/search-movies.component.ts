import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../services/movies-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
})
export class SearchMoviesComponent implements OnInit {
  movies: Pelicula[] = [];

  resultado!: string;
  constructor(
    private moviesService: MoviesServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;

      this.resultado = params.nombre;

      if (params.nombre) {
        this.cargarData(params.nombre);
      }
    });
  }

  cargarData(termino: string) {
    this.moviesService.getMovies(termino).subscribe((resp) => {
      this.movies = resp['results'];
    });
  }
}
