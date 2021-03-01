import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  constructor(private http: HttpClient) { }

  GetWeatherData(city: string): Observable<any> {
    const weatherServiceQueryString = 'q=' + city + '&appid=ffcaa3563f99d5cd76b5973fca0e38a5&units=Imperial';
    return this.http.get<any>(encodeURI('https://api.openweathermap.org/data/2.5/weather?' + weatherServiceQueryString));
  }

}