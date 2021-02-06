import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmployeesModelData } from '../employee-details-table/models/employees-model';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  editUserForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EmployeeEditComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.populateForm();
    console.log(this.data);
  }

  populateForm() {
    this.editUserForm = new FormGroup({
      firstName: new FormControl(this.data.selectedEmployee.firstName, [Validators.required]),
      lastName: new FormControl(this.data.selectedEmployee.lastName),
      email: new FormControl(this.data.selectedEmployee.email, [Validators.email, Validators.required]),
      phone: new FormControl(this.data.selectedEmployee.phone, [Validators.minLength(10), Validators.required]),
      address: new FormControl(this.data.selectedEmployee.address),
      city: new FormControl(this.data.selectedEmployee.city),
      state: new FormControl(this.data.selectedEmployee.state),
      employeeTypeId: new FormControl(this.data.selectedEmployee.employeeTypeId)
    });
  }

  get editFormControls() {
    return this.editUserForm.controls;
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      console.log("Form Submitted!");
      this.editUserForm.reset();
      this.dialogRef.close();
    }
    else {
      console.log("Please fix errors!");
    }
  }

  cancel(){
    this.dialogRef.close();    
  }

}
