import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  
  /**
   * Injects the Material Dialog.
   * @param dialog 
   */
  constructor(public dialog: MatDialog) { }
  
  isChecked = false;
  isFinished = false;
  isTypes = false;
  isFirst = true;
  isSchedule = false;
  selectedTab = 3;
  typesParent: any[];
  appointmentParent: any[];

  /**
   * When check event happens from the type-list.component
   * @param isChecked 
   */
  onCheck(isChecked) {
    this.isChecked = isChecked;
  }

  /**
   * When types are being sent from the type-list.component
   * @param types 
   */
  onTypeSend(types) {
    this.isTypes = true;
    this.selectedTab = 2;
    this.typesParent = types;
  }

  /**
   * When schedule is being sent from scheudle.component
   * @param schedule 
   */
  onScheduleSend(schedule) {
    this.isSchedule = true;
    this.selectedTab = 1;
    this.appointmentParent = schedule;
  }

  ngOnInit() {}

  /**
   * 
   * @param event 
   */
  isNextDisable(event) {
    this.selectedTab = event;
  }
}
