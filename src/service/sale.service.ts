import { Injectable } from '@angular/core';
import {environments} from '../environments/environments';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Sala} from '../dto/sala';
import {Observable} from 'rxjs';
import {BaseService} from './base-service';

@Injectable({
  providedIn: 'root'
})
export class SaleService extends BaseService {
  private apiUrl = environments.backendUrl;

  constructor(private http: HttpClient) {
    super();
  }

  getAllSale(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.apiUrl+"sale/", this.getHeaders());
  }
}
