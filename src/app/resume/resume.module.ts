import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import {DemoMaterialModule} from '../material-module.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class ResumeModule { }
