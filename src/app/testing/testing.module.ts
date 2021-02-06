import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialtestComponent } from './materialtest/materialtest.component';
import {DemoMaterialModule} from '../material-module.module';


@NgModule({
  declarations: [MaterialtestComponent],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class TestingModule { }
