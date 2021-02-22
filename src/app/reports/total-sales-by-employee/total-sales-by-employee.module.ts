import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalSalesByEmployeeComponent } from './total-sales-by-employee/total-sales-by-employee.component';
import { DemoMaterialModule } from 'src/app/material-module.module';



@NgModule({
  declarations: [TotalSalesByEmployeeComponent],
  imports: [
    CommonModule,
    DemoMaterialModule
  ]
})
export class TotalSalesByEmployeeModule { }
