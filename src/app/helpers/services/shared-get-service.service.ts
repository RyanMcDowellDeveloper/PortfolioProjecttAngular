import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsaCitiesModel } from '../models/usa-cities-model';

@Injectable({
  providedIn: 'root'
})
export class SharedGetServiceService {

  constructor(private http: HttpClient) { }

  GetUsaCities(): Observable<UsaCitiesModel[]> {
    return this.http.get<UsaCitiesModel[]>('https://localhost:44309/GetListUsaCities');
  }

} 
