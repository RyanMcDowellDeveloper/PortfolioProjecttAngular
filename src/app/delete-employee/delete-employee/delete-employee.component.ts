import { Component, OnInit, Inject } from '@angular/core';
import { DeleteEmployeeService } from '../services/delete-employee.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ReusableMessageServiceService } from 'src/app/helpers/reusable-modal-message/services/reusable-message-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employeeId: number;

  constructor(public dialogRef: MatDialogRef<DeleteEmployeeComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any
    , private deleteEmployeeService: DeleteEmployeeService
    , private reusableMessage: ReusableMessageServiceService) { }

  ngOnInit(): void {
    console.log(this.data.selectedEmployee);
    this.employeeId = this.data.selectedEmployee.userId;
  }

  cancel() {
    this.dialogRef.close();
  }

  delete() {
    this.deleteEmployeeService.DeleteEmployee(this.employeeId).subscribe(data => {
      this.dialogRef.close();
      const options = { userMessage: this.data.selectedEmployee.firstName + ' ' + this.data.selectedEmployee.lastName + ' has been deleted.' };
      this.reusableMessage.open(options);
    }, err => {
      this.dialogRef.close();
      const options = { userMessage: 'There was an error when trying to delete the employee.' };
      this.reusableMessage.open(options);
    });
  }
}
