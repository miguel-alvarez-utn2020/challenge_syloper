import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-movies/components/home-carousel/home-carousel.component';
import { HomeMoviesComponent } from './home-movies/home-movies.component';
import { NavBarComponent } from './home-movies/components/nav-bar/nav-bar.component';
import { PipesModule } from '../pipes/pipes.module';
import { HomeGalleryComponent } from './home-movies/components/home-gallery/home-gallery.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailMovieComponent } from './home-movies/detail-movies/detail-movie.component';
import { SearchMoviesComponent } from './home-movies/search-movies/search-movies.component';
import { CardMovieComponent } from './home-movies/components/card-movie/card-movie.component';









@NgModule({
  declarations: [
    HomeMoviesComponent,
    HomeCarouselComponent,
    NavBarComponent,
    HomeGalleryComponent,
    DetailMovieComponent,
    SearchMoviesComponent,
    CardMovieComponent,
 
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    FormsModule,
  ],
  exports:[
    HomeMoviesComponent,
    NavBarComponent,
    HomeGalleryComponent
  ]
})
export class ViewsModule { }
