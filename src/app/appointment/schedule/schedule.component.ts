import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppointmentService } from '../appointment.service';

const OPEN_HOUR = "09:00";
const CLOSE_HOUR = "21:00";
const STEP = 10;

function getTimeRanges(openTime: string, closeTime: string, step: number, date: Date): any[] {

  let timesArr = [];
  let closeMinute: number = parseInt(closeTime.split(':')[1]);
  let closeHour: number = parseInt(closeTime.split(':')[0]);
  let openHour: number = parseInt(openTime.split(':')[0]);
  let openMinute: number = parseInt(openTime.split(':')[1]);
  let closeDate = new Date(date);
  let currHour: number = openHour;
  let currMinute: number = openMinute;
  let currMilliseconds;
  let currHourStr: string;
  let currMinutesStr: string;
  let isDone: boolean = false;

  while(!isDone) {
    currHour < 10 ? currHourStr = "0" + currHour.toString() : currHourStr = currHour.toString();
    currMinute < 10 ? currMinutesStr = "0" + currMinute.toString() : currMinutesStr = currMinute.toString();
    date.setHours(currHour, currMinute);
    if (new Date().getTime() < date.getTime()) {
      timesArr.push({display: currHourStr + ":" + currMinutesStr, value: date.getTime()});
    }

    if(currHour === closeHour && currMinute === closeMinute) {
      isDone = true;
      break;
    }


    currMinute += step;

    if (currMinute >= 60) {
      currMinute = 0;
      currHour += 1;
    }

    if (currHour == 24) {
      currHour = 0;
    }


  }

  return timesArr;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
  @Input() types = [];
  @Input() currSelectedTab;
  @Output() scheduleOutside = new EventEmitter<any>();
  

  dateSchedule: any;
  timeSchedule: any;
  totalPrice: number;
  totalDuration: number; 
  times = [{display: '', value: 0}];
  isDateFilled: boolean = false;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.types) {
      if (this.types.length > 0) {
        this.totalPrice = 0;
        this.totalDuration = 0;

        this.types.forEach(type => {
          this.totalPrice += type.price;
          this.totalDuration += type.duration;
        });
      }
    }
  }

  filterValid(event) {
    if (event && this.isValidDate()) {
      let closeDate = new Date(event);

      closeDate.setHours(parseInt(CLOSE_HOUR.split(':')[0]), parseInt(CLOSE_HOUR.split(':')[1]));
      closeDate.setMinutes(closeDate.getMinutes() - this.totalDuration);
    

      this.appointmentService.get(event.getDate().toString() + "-" +
                                 (event.getMonth() + 1).toString() + "-" +
                                  event.getFullYear().toString()).subscribe((appointments) => {

        this.times = getTimeRanges(OPEN_HOUR, closeDate.getHours().toString() + ":" + closeDate.getMinutes().toString(), STEP, event);
        
        appointments.forEach(appointment => {
          for (let i = 0; i < this.times.length; i++) {
            let dateTo = new Date(this.times[i].value);
            dateTo.setMinutes(dateTo.getMinutes() + this.totalDuration);

            if ((this.times[i].value >= appointment.datefrom && this.times[i].value <= appointment.dateto) ||
                (dateTo.getTime() > appointment.datefrom && dateTo.getTime() <= appointment.dateto) ||
                (this.times[i].value < appointment.datefrom && dateTo.getTime() > appointment.dateto) ||
                 dateTo.getTime() > closeDate.getTime()) {
                  this.times.splice(i, 1);
                  i--;
            }
          }
        })
/*
        this.times.forEach((time, index) => {
          let dateTo = new Date(this.dateSchedule);
          dateTo.setMinutes(this.dateSchedule.getMinutes() + this.totalDuration);
          if(time.value >= this.dateSchedule.getTime() && time.value <= dateTo.getTime()) {
            this.times.splice(index, 1);
          }
         // type.checked = false;
        });*/
  
      //  this.appointmentTypes = appointmentTypes;
      }, (err) => {
        console.log(err);
      });
    }
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    let isValid: boolean = false;
    // Prevent Saturday and Sunday from being selected.
    return ((d.getTime() >= new Date().getTime() && day !== 6) || (day !== 6 && d.getDate() == new Date().getDate() && d.getMonth() == new Date().getMonth() && d.getFullYear() == new Date().getFullYear()));
  }

  next() {
    let time: string[] = this.timeSchedule.display.split(':');
    let dateMilliseconds: number;
    let dateMillisecondsTo: number;
    let dateScheduleTo: any;

    this.dateSchedule.setHours(parseInt(time[0]), parseInt(time[1]));
    dateMilliseconds = this.dateSchedule.getTime();
    dateScheduleTo = new Date(this.dateSchedule);
    dateScheduleTo.setMinutes(this.dateSchedule.getMinutes() + this.totalDuration);
    dateMillisecondsTo = dateScheduleTo.getTime();

    this.scheduleOutside.emit({'date': dateMilliseconds,  'dateto': dateMillisecondsTo, 'types': this.types.map(type => type._id)});
  }

  isValidDate() {
    let currDate;
    let currYear;
    let currMonth;

    currDate = new Date();
    currYear = currDate.getFullYear();
    currMonth = currDate.getMonth() + 1
    return (this.dateSchedule instanceof Date && this.dateSchedule.getFullYear() >= currYear && this.dateSchedule.getMonth() + 1 >= currMonth);
  }

  loadMonth(picker) {
    let currMonth = (new Date().getMonth() + 1).toString() + "-" + (new Date().getFullYear()).toString();

    this.appointmentService.getByMonth(currMonth).subscribe((appointments) => {
      console.log(appointments);
    });

    picker.open();

    
  }
}
