import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMoviesComponent } from './home-movies.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { ComponentsModule } from './components/components.module';
import { HomeGalleryComponent } from './components/home-gallery/home-gallery.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeMoviesComponent,
    HomeGalleryComponent,
    SearchMoviesComponent,
  ],
  imports: [
    CommonModule, 
    ComponentsModule, 
    RouterModule],
  exports: [
    HomeMoviesComponent, 
    HomeGalleryComponent, 
    SearchMoviesComponent
  ],
})
export class HomeMoviesModule {}
