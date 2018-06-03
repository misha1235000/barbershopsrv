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
  isChecked: boolean = false;
  isTypes: boolean = false;
  isSchedule: boolean = false;
  selectedTab: number = 3;
  typesParent: any[];

  onCheck(isChecked) {
    this.isChecked = isChecked;
  }

  onTypeSend(types) {
    this.isTypes = true;
    this.selectedTab = 2;
    this.typesParent = types;
  }

  onScheduleSend(schedule) {
    this.selectedTab = 1;
    this.isSchedule = true;
  }

  ngOnInit() {
    
  }

  isNextDisable(event) {
    if (event > this.selectedTab) {
     // this.isNext = false;
    }

    this.selectedTab = event;
  }
}
