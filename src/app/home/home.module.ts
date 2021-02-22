import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DemoMaterialModule } from '../material-module.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class HomeModule { }
