import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeDetailsTableComponent } from './employee-details-table/employee-details-table.component';
import { EmployeesService } from './employee-details-table/services/employees.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DemoMaterialModule } from '../material-module.module';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [EmployeeDetailsTableComponent, EmployeeEditComponent],
  imports: [
    EmployeesRoutingModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class EmployeesModule { }
