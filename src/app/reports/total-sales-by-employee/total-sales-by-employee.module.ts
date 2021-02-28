import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalSalesByEmployeeComponent } from './total-sales-by-employee/total-sales-by-employee.component';
import { DemoMaterialModule } from 'src/app/material-module.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TotalSalesByEmployeeTableComponent } from './tables/total-sales-by-employee-table/total-sales-by-employee-table.component';



@NgModule({
  declarations: [TotalSalesByEmployeeComponent, TotalSalesByEmployeeTableComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TotalSalesByEmployeeModule { }
