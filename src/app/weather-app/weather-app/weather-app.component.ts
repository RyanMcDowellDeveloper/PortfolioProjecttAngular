import { Component, OnInit } from '@angular/core';
import { WeatherAppService } from '../services/weather-app.service';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {

  weatherData: any;
  selectedCity: string = '';
  currentTemp: string = '';
  tempDescription: string = '';
  windSpeed: string = '';
  iconId: string = '';
  iconUrl: string = '';
  locationNotFound: boolean = false;

  constructor(private weatherService: WeatherAppService) { }

  ngOnInit(): void {
  }

  getSelectedCity(evt) {
    if (evt) {
      this.selectedCity = evt;
    }
  }

  getForecast() {
    this.weatherData = null;
    this.locationNotFound = false;
    this.resetWeatherModels();
    if (this.selectedCity) {
      this.weatherService.GetWeatherData(this.selectedCity.trim().toLowerCase())
        .subscribe(data => {
          this.weatherData = data;
          this.populateWeatherModels();
        }
          , err => { 
            this.locationNotFound = true;
          }
        )
    }
  }

  populateWeatherModels() {
    this.resetWeatherModels();
    this.currentTemp = this.weatherData.main.temp;
    this.tempDescription = this.weatherData.weather[0].description;
    this.iconId = this.weatherData.weather[0].icon;
    this.windSpeed = this.weatherData.wind.speed;
    this.buildIconUrlString();
  }

  resetWeatherModels() {
    this.currentTemp = null;
    this.tempDescription = null;
    this.iconId = null;
    this.windSpeed = null;
    this.iconUrl = null;
  }

  buildIconUrlString() {
    this.iconUrl = 'http://openweathermap.org/img/wn/' + this.iconId + '@2x.png';
  }

}
