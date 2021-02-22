import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-reusable-message',
  templateUrl: './reusable-message.component.html',
  styleUrls: ['./reusable-message.component.css']
})
export class ReusableMessageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {userMessage: string}, private mdDialogRef: MatDialogRef<ReusableMessageComponent>) { }

  ngOnInit(): void {
  }

}
