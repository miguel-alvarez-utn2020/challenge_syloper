import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMoviesComponent } from './views/home-movies/home-movies.component';
import { DetailMovieComponent } from './views/home-movies/detail-movies/detail-movie.component';
import { SearchMoviesComponent } from './views/home-movies/search-movies/search-movies.component';


const routes: Routes = [

  {
    path:'',
    component:HomeMoviesComponent
  },
  {
    path:'detail-movie/:id',
    component:DetailMovieComponent
  },
  {
    path:'search-movie/:nombre',
    component:SearchMoviesComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
