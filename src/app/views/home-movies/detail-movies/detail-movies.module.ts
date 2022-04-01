import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailMovieComponent } from './detail-movie.component';
import { HomeCarouselComponent } from '../components/home-carousel/home-carousel.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    DetailMovieComponent,
    HomeCarouselComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports:[
    DetailMovieComponent,
  ]
})
export class DetailMoviesModule { }
