import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployeesModelData } from '../../employee/employee-details-table/models/employees-model';
import { EmployeesService } from '../../employee/employee-details-table/services/employees.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgressBarComponent } from 'src/app/helpers/progress-bar/progress-bar/progress-bar.component';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  editUserForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EmployeeEditComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any
    , private employeeService: EmployeesService
    ,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.populateForm();
  }

  populateForm() {
    this.editUserForm = new FormGroup({
      FirstName: new FormControl(this.data.selectedEmployee.firstName, [Validators.required,Validators.maxLength(100)]),
      LastName: new FormControl(this.data.selectedEmployee.lastName, [Validators.required,Validators.maxLength(100)]),
      Email: new FormControl(this.data.selectedEmployee.email, [Validators.email, Validators.required,Validators.maxLength(100)]),
      Phone: new FormControl(this.data.selectedEmployee.phone, [Validators.minLength(10), Validators.required,Validators.maxLength(25)]),
      Address: new FormControl(this.data.selectedEmployee.address, [Validators.required,Validators.maxLength(100)]),
      City: new FormControl(this.data.selectedEmployee.city, [Validators.required,Validators.maxLength(50)]),
      State: new FormControl(this.data.selectedEmployee.state, [Validators.required,Validators.maxLength(2)]),
      EmployeeTypeId: new FormControl(this.data.selectedEmployee.employeeTypeId,Validators.required),
      PayRate: new FormControl(this.data.selectedEmployee.payRate, Validators.required),
      userId: new FormControl(this.data.selectedEmployee.userId)
    });
  }

  get editFormControls() {
    return this.editUserForm.controls;
  }
  

  onSubmit() {
    this.openDialog();
    if (this.editUserForm.valid) {
      this.employeeService.UpdateEmployee(this.editUserForm.value).subscribe(data => {
        this.editUserForm.reset();
        this.closeDialog();
        this.dialogRef.close();
      }, err => {
        this.closeDialog();
      })
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  openDialog() {
    this.dialog.open(ProgressBarComponent, { disableClose: true });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
