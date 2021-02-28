import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoMaterialModule} from '../material-module.module';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { SelectCitiesAutopopulateComponent } from './select-cities-autopopulate/select-cities-autopopulate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WeatherAppComponent, SelectCitiesAutopopulateComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class WeatherAppModule { }
