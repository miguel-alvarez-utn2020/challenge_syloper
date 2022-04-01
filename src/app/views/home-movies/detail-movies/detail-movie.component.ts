import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../services/movies-service.service';
import {
  PeliculaDetalle,
  RespuestaCredits,
  Cast,
} from '../interfaces/interfaces';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  @Input() id: any;
  movieDetail!: PeliculaDetalle;
  actors: Cast[] = [];

  stars = Array();
  constructor(
    private moviesService: MoviesServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;

      this.cargarData(params.id);

      this.cargarActores(params.id);
    });
  }

  cargarData(id: number) {
    let idDetail: string = '';
    idDetail = id.toString();
    this.moviesService.getMovieDetail(idDetail).subscribe((resp) => {
      this.movieDetail = resp;
      this.stars = Array(Math.floor(this.movieDetail.vote_average));
    });
  }

  cargarActores(id: number) {
    let idDetail: string = '';
    idDetail = id.toString();
    this.moviesService.getActores(idDetail).subscribe((resp) => {
      this.actors = resp.cast;
    });
  }
}
