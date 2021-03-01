import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModuleModule } from './layout-module/layout-module.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {EmployeeModule} from 'src/app/employee/employee.module';
import {CreateEmployeeModule} from 'src/app/create-employee/create-employee.module';
import {ReusableModalMessageModule} from 'src/app/helpers/reusable-modal-message/reusable-modal-message.module';
import { DeleteEmployeeModule } from './delete-employee/delete-employee.module';
import {EmployeeSalesReportModule} from 'src/app/reports/employee-sales-report/employee-sales-report.module';
import {EmployeesCheckboxGroupModule} from 'src/app/helpers/employees-checkbox-group/employees-checkbox-group.module';
import {HomeModule} from '../app/home/home.module';
import {TotalSalesByEmployeeModule} from 'src/app/reports/total-sales-by-employee/total-sales-by-employee.module';
import {WeatherAppModule} from '../app/weather-app/weather-app.module';
import {SharedGetServiceService} from '../app/helpers/services/shared-get-service.service';
import {ProgressBarModule} from '../app/helpers/progress-bar/progress-bar.module';
import {ResumeModule} from '../app/resume/resume.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModuleModule,
    EmployeeModule,
    CreateEmployeeModule,
    HttpClientModule,
    CommonModule,
    ReusableModalMessageModule,
    CreateEmployeeModule,
    DeleteEmployeeModule,
    EmployeeSalesReportModule,
    EmployeesCheckboxGroupModule,
    HomeModule,
    TotalSalesByEmployeeModule,
    WeatherAppModule,
    ProgressBarModule,
    ResumeModule
  ],
  exports: [],
  providers: [HttpClientModule,SharedGetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
