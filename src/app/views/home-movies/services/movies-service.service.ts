import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import {
  RespuestaMDB,
  PeliculaDetalle,
  RespuestaCredits,
  Pelicula,
} from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  private popularesPage = 0;

  constructor(private http: HttpClient) {}

  private ejecutarQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es`;

    return this.http.get<T>(query);
  }

  getPopulares() {
    this.popularesPage++;

    const query = `/discover/movie?short_by=popularity.desc&page=${this.popularesPage}`;

    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getFeatures() {
    const hoy = new Date();
    const ultimoDia = new Date(
      hoy.getFullYear(),
      hoy.getMonth() + 1,
      0
    ).getDate();
    let mesString;

    const mes = hoy.getMonth() + 1;

    if (mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const inicio = `${hoy.getFullYear()}-${mesString}-01`;
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`;

    //si se introduce el tipo en la respuesta, no hace falta del lado del componente
    return this.ejecutarQuery(
      `/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`
    );
  }

  getMovieDetail(id: string) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }
  getActores(id: string) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }
  getMovies(termino: string) {
    return this.ejecutarQuery<RespuestaMDB>(`/search/movie?query=${termino}`);
  }
}
