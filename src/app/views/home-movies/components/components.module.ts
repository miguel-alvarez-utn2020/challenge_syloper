import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardMovieComponent } from './card-movie/card-movie.component';

@NgModule({
  declarations: [
    HomeCarouselComponent,
    HomeGalleryComponent,
    NavBarComponent,
    CardMovieComponent,
  ],
  imports: [
    CommonModule, 
    PipesModule, 
    RouterModule, 
    FormsModule],
  exports: [
    HomeCarouselComponent,
    HomeGalleryComponent,
    NavBarComponent,
    CardMovieComponent,
  ],
})
export class ComponentsModule {}
