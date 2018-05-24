import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

export interface Appointment {
  date: String;
  day: String;
  time: String;
  price: Number;
  duration: Number;
  products: number[];
}

const APPOINTMENT_DATA: Appointment[] = [
  /*
  {'date': '15/05/2018', 'day': 'שלישי' ,'time':'15:30', 'price':130, 'duration':60, 'products': [5,6]}, 
  {'date': '15/05/2018', 'day': 'שלישי' ,'time':'16:15', 'price':80, 'duration':30, 'products': [5,2]}, 
  {'date': '15/05/2018', 'day': 'שלישי' ,'time':'18:20', 'price':180, 'duration':90, 'products': [2,3]}, 
  {'date': '16/05/2018', 'day': 'רביעי' ,'time':'09:30', 'price':50, 'duration':20, 'products': [5,9,1]},
  */ 
];


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  displayedColumns = ['date', 'day', 'time', 'price', 'duration', 'products', 'edit', 'delete'];
  appointmentSource = [];
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAll().subscribe((appointments) => {
      this.appointmentSource = appointments;
    }, (err) => {
      console.log(err);
    });
  }

}
