import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewEmployeeComponent } from './create-new-employee/create-new-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../material-module.module';
import {  LayoutModuleModule } from '../layout-module/layout-module.module';


@NgModule({
  declarations: [CreateNewEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    ReactiveFormsModule, 
    FormsModule,
    LayoutModuleModule
  ]
})
export class CreateEmployeeModule { }
