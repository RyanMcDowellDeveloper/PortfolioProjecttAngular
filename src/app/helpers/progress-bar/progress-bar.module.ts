import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DemoMaterialModule } from 'src/app/material-module.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ]
  ,exports:[ProgressBarComponent]
})
export class ProgressBarModule { }
