import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { EmployeesService } from 'src/app/employee/employee-details-table/services/employees.service';
import { EmployeesModelData } from 'src/app/employee/employee-details-table/models/employees-model';
import {EmployeeSalesReportParams} from '../models/employee-sales-report-params';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EmployeeSalesReportService} from '../services/employee-sales-report.service';
import { EmployeeSalesReportData } from '../models/employee-sales-report-data';

@Component({
  selector: 'app-employee-sales-report',
  templateUrl: './employee-sales-report.component.html',
  styleUrls: ['./employee-sales-report.component.css']
})
export class EmployeeSalesReportComponent implements OnInit {

  employeeSalesReportForm: FormGroup;
  // employees: EmployeesModelData[] = [];
  reportParamsModel: EmployeeSalesReportParams;
  selectedEmployees: EmployeesModelData[];
  reportResults: EmployeeSalesReportData[];
  
  constructor(private employeesService: EmployeesService
    , private employeeSalesReportService: EmployeeSalesReportService) { }

  ngOnInit(): void {
    // this.getEmployees();
    this.populateForm();
  }

  populateForm(){
    this.employeeSalesReportForm = new FormGroup({
      selectedStartDate: new FormControl('',),
      selectedEndDate: new FormControl(''),
    });
  }

  getEmployees() {
    this.employeesService.GetEmployees().subscribe(employees => {
      // this.employees = employees;
    })
  }

  getSelectedEmployees(evt){
    this.selectedEmployees = [];
    this.selectedEmployees = evt;
  }

  populateReportParams(){
    this.reportParamsModel = new EmployeeSalesReportParams;
    if(this.selectedEmployees){
    this.reportParamsModel.employeeId = this.selectedEmployees.map(id => id.userId);
    }
    this.reportParamsModel.endDate = this.employeeSalesReportForm.get('selectedEndDate').value;
    this.reportParamsModel.startDate = this.employeeSalesReportForm.get('selectedStartDate').value;
  }

  onSubmit() {
    this.populateReportParams();
    this.employeeSalesReportService.GetEmployeeSalesReport(this.reportParamsModel).subscribe(data => {
      this.reportResults = data;
    });
  }

}
