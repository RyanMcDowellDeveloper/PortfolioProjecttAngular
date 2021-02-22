import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSalesReportComponent } from './employee-sales-report/employee-sales-report.component';
import { DemoMaterialModule } from 'src/app/material-module.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeesCheckboxGroupModule } from 'src/app/helpers/employees-checkbox-group/employees-checkbox-group.module';
import { EmployeeSalesReportResultsTableComponent } from './employee-sales-report-results-table/employee-sales-report-results-table.component';

@NgModule({
  declarations: [EmployeeSalesReportComponent, EmployeeSalesReportResultsTableComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesCheckboxGroupModule
  ],
  exports:[]
})
export class EmployeeSalesReportModule { }
