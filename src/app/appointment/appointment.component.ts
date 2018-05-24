import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  test;

  openDialog(): void {
    let dialogRef = this.dialog.open(AddAppointmentComponent, {
      width: '800px',
      height: '500px',
     // data: { name: this.name, animal: this.animal }
      data: {test:123}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit() {
  }
}
