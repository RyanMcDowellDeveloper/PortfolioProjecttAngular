import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../material-module.module';
import { EmployeeDetailsTableComponent } from './employee-details-table/employee-details-table.component';

const routes: Routes = [{ path: '', component: EmployeeDetailsTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
