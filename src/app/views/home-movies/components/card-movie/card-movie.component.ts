import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movie!:Pelicula;



  constructor() { }

  ngOnInit(): void {
  }

  get getstars(){
    const arrStars = [];
    for(let i =0; i < this.movie.vote_average; i++){
        arrStars.push(i);
    }
    return arrStars;
  }

  


}
