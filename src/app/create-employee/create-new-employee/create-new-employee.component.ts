import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeesModelData } from 'src/app/employee/employee-details-table/models/employees-model';
import { CreateEmployeeServiceService } from '../services/create-employee-service.service';
import { ReusableMessageComponent } from 'src/app/helpers/reusable-modal-message/reusable-message/reusable-message.component';
import { ReusableMessageServiceService } from 'src/app/helpers/reusable-modal-message/services/reusable-message-service.service';
import { ProgressBarComponent } from 'src/app/helpers/progress-bar/progress-bar/progress-bar.component';

@Component({
  selector: 'app-create-new-employee',
  templateUrl: './create-new-employee.component.html',
  styleUrls: ['./create-new-employee.component.css']
})
export class CreateNewEmployeeComponent implements OnInit {

  createUserForm: FormGroup;
  employeeModel: EmployeesModelData;
  isFormInvalid: boolean = false;

  constructor(private createEmployeeService: CreateEmployeeServiceService
    , private reusableMessage: ReusableMessageServiceService
    , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.createForm();
    this.formChange();
  }

  formChange() {
    this.createUserForm.statusChanges
      .subscribe(() => this.onFormValid());
  }

  onFormValid() {
    if (this.createUserForm.valid) {
      this.isFormInvalid = false;
    }
    else {
      this.isFormInvalid = true;
    }
  }

  createForm() {
    this.createUserForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      LastName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      Email: new FormControl('', [Validators.email, Validators.required, Validators.maxLength(100)]),
      Phone: new FormControl('', [Validators.minLength(10), Validators.required, Validators.maxLength(25)]),
      Address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      City: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      State: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      EmployeeTypeId: new FormControl('', Validators.required),
      PayRate: new FormControl('', Validators.required),
    });
  }

  get getCreateUserForm() {
    return this.createUserForm.controls;
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.openDialog();
    if (this.createUserForm.valid) {
      this.createEmployeeService.CreateEmployee(this.createUserForm.value).subscribe(data => {
        this.createUserForm.reset();
        formDirective.resetForm();
        const options = { userMessage: 'Employee was successfully created!' };
        this.closeDialog();
        this.reusableMessage.open(options);
      }
        , err => {
          const options = { userMessage: 'There was an error.  Employee was not created.' };
          this.closeDialog();
          this.reusableMessage.open(options);
        }
      );
    }
  }

  openDialog() {
    this.dialog.open(ProgressBarComponent, { disableClose: true });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}


