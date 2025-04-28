import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from '../dto/film';
import {environments} from '../environments/environments';
import {DateInterval} from '../dto/date-interval';
import {BaseService} from './base-service';

@Injectable({
  providedIn: 'root'
})
export class FilmService extends BaseService{
  private apiUrl = environments.backendUrl;

  constructor(private http: HttpClient) {
    super();
  }

  getStoricoFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl + "film/", this.getHeaders());
  }

  getStoricoFilmFromToday(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl + "film/now", this.getHeaders());
  }

  getStoricoFilmFromTodayAndImax(imax: boolean): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiUrl + "film/now/imax/" + imax, this.getHeaders());
  }

  getProgrammazioneByName(filmName: string): Observable<Film> {
    return this.http.get<Film>(this.apiUrl + "film/name/" + filmName, this.getHeaders());
  }

  getProgrammazioneByNameAndImax(filmName: string, imax: boolean): Observable<Film> {
    return this.http.get<Film>(this.apiUrl + "film/name/imax/" + filmName + "/" + imax, this.getHeaders());
  }

  getProgrammazioneInInterval(dateInterval: DateInterval): Observable<Film[]> {
    return this.http.post<Film[]>(this.apiUrl + "film/interval", dateInterval, this.getHeaders());
  }

  getProgrammazioneInIntervalAndImax(dateInterval: DateInterval, imax: boolean): Observable<Film[]> {
    return this.http.post<Film[]>(this.apiUrl + "film/interval/imax/" + imax, dateInterval, this.getHeaders());
  }

  getProgrammazioneInIntervalAndName(dateInterval: DateInterval, filmName: string): Observable<Film> {
    return this.http.post<Film>(this.apiUrl + "film/interval/name/" + filmName, dateInterval, this.getHeaders());
  }

  getProgrammazioneInIntervalAndNameAndImax(dateInterval: DateInterval, filmName: string, imax: boolean): Observable<Film> {
    return this.http.post<Film>(this.apiUrl + "film/interval/name/imax/" + filmName + "/" + imax, dateInterval, this.getHeaders());
  }
}
