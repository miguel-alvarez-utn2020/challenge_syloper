import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { MoviesServiceService } from '../../services/movies-service.service';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
})
export class HomeCarouselComponent implements OnInit {
  oculto = 50;

  color = 'blue';

  @Input() movies: Pelicula[] = [];

  ngOnInit(): void {}
}
