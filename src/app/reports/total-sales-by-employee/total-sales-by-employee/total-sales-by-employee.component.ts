import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProgressBarComponent } from 'src/app/helpers/progress-bar/progress-bar/progress-bar.component';
import { TotalSalesByEmployeeData } from '../models/total-sales-by-employee-data';
import { TotalSalesByEmployeeParams } from '../models/total-sales-by-employee-params';
import { TotalSalesByEmployeeService } from '../services/total-sales-by-employee.service';

@Component({
  selector: 'app-total-sales-by-employee',
  templateUrl: './total-sales-by-employee.component.html',
  styleUrls: ['./total-sales-by-employee.component.css']
})
export class TotalSalesByEmployeeComponent implements OnInit {

  reportCriteriaForm: FormGroup;
  reportParms: TotalSalesByEmployeeParams;
  reportData: TotalSalesByEmployeeData[];

  constructor(private totalSalesByEmployeeService: TotalSalesByEmployeeService
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm();
  }

  //create form
  createForm() {
    this.reportCriteriaForm = new FormGroup({
      minSalaryCriteria: new FormControl(),
      maxSalaryCriteria: new FormControl()
    });
  }

  //populate parameters object to be sent to web api call
  populateParamsObject() {
    this.reportParms = new TotalSalesByEmployeeParams;
    this.reportParms.maxSalary = this.reportCriteriaForm.get('maxSalaryCriteria').value;
    this.reportParms.minSalary = this.reportCriteriaForm.get('minSalaryCriteria').value;
  }

  //call web api to get report data
  onSubmit() {
    this.openDialog();
    this.populateParamsObject();
    this.totalSalesByEmployeeService.GetTotalSalesByEmployeeReport(this.reportParms).subscribe(data => {
      this.reportData = data;
      this.closeDialog();
    }, err => { this.closeDialog(); })
  }

  openDialog() {
    this.dialog.open(ProgressBarComponent, { disableClose: true });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
