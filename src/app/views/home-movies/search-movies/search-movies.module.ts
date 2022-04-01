import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMoviesComponent } from './search-movies.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchMoviesComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ],
  exports:[
    SearchMoviesComponent
  ]
})
export class SearchMoviesModule { }
