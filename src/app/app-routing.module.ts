import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsTableComponent } from '../app/employee/employee-details-table/employee-details-table.component';
import { CreateNewEmployeeComponent } from 'src/app/create-employee/create-new-employee/create-new-employee.component';
import { EmployeeSalesReportComponent } from './reports/employee-sales-report/employee-sales-report/employee-sales-report.component';
import { HomeComponent } from './home/home/home.component';
import { TotalSalesByEmployeeComponent } from './reports/total-sales-by-employee/total-sales-by-employee/total-sales-by-employee.component';
import { WeatherAppComponent } from '../app/weather-app/weather-app/weather-app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employeedetails', component: EmployeeDetailsTableComponent },
  { path: 'createemployee', component: CreateNewEmployeeComponent },
  { path: 'employeesalesreport', component: EmployeeSalesReportComponent },
  { path: 'totalemployeesalesreport', component: TotalSalesByEmployeeComponent },
  { path: 'weatherservice', component: WeatherAppComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})

export class AppRoutingModule { }