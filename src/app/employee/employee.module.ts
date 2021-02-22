import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsTableComponent } from './employee-details-table/employee-details-table.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { DemoMaterialModule } from '../material-module.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { LayoutModuleModule } from '../layout-module/layout-module.module';

@NgModule({
  declarations: [EmployeeDetailsTableComponent, EmployeeEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModuleModule
  ]
})
export class EmployeeModule { }
