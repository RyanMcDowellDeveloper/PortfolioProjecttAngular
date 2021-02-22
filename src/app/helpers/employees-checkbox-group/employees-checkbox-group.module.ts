import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesCheckboxGroupComponent } from './employees-checkbox-group/employees-checkbox-group.component';
import {DemoMaterialModule} from '../../material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesCheckboxGroupComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[EmployeesCheckboxGroupComponent]
})
export class EmployeesCheckboxGroupModule { }
