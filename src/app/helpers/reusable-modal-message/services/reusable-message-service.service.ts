import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {ReusableMessageComponent} from '../reusable-message/reusable-message.component';

@Injectable({
  providedIn: 'root'
})
export class ReusableMessageServiceService {

  constructor(private dialog: MatDialog) { }

  dialogRef: MatDialogRef<ReusableMessageComponent>;

  public open(options) {
    this.dialogRef = this.dialog.open(ReusableMessageComponent, {    
         data: {
           userMessage: options.userMessage
         }
    });
  }

}
