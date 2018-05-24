import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const TIMES = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
               '12:30', '13:00', '13:30', '13:00', '13:30', '14:00', '14:30'];

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})

export class AddAppointmentComponent implements OnInit {
  times: String[] = TIMES;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  selectedTime: String;
  selectedDate: Date;
  duration: Number = 30;
  totalprice: Number = 50;
  ownerID: String = "Testing";

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddAppointmentComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }
  AssignAppointment(): void {
    this.selectedDate.setHours(parseInt(this.selectedTime.substr(0,2)), parseInt(this.selectedTime.substr(3,2)));
    this.dialogRef.close(this.selectedDate);
  }

  CloseAppointment(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      timeCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6 && d.getDate() !== 17;
  }


}
