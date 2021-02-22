import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import {DemoMaterialModule} from '../material-module.module';

@NgModule({
  declarations: [DeleteEmployeeComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
  ]
})
export class DeleteEmployeeModule { }
