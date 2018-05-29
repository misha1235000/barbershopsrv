import { Component, OnInit } from '@angular/core';
import { AppointmentTypeService } from '../appointment.service';

export interface Appointment {
  date: String;
  day: String;
  time: String;
  price: Number;
  duration: Number;
  products: number[];
}


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointmentTypes = [];
  checkedTypes = [];
  
  constructor(private appointmentService: AppointmentTypeService) { }

  ngOnInit() {
    this.appointmentService.get().subscribe((appointmentTypes) => {
      appointmentTypes.forEach(type => {
        type.checked = false;
      });

      this.appointmentTypes = appointmentTypes;
    }, (err) => {
      console.log(err);
    });
  }

  handleTypeList(type) {
    let isFound: Boolean = false;

    for (let index = 0; index < this.checkedTypes.length; index++) {
      if (this.checkedTypes[index] === type) {
        this.checkedTypes.splice(index, 1);
        isFound = true;
        return;
      }
    }

    this.checkedTypes.push(type);
  }

}
