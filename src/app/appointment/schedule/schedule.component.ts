import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

function getTimeRanges(openHour: number, closeHour: number, step: number): string[] {
  let timesArr: string[] = [];
  let currHour: number = openHour;
  let currMinutes: number = 0;
  let currHourStr: string;
  let currMinutesStr: string;
  let isDone: boolean = false;

  while(!isDone) {
    currHour < 10 ? currHourStr = "0" + currHour.toString() : currHourStr = currHour.toString();
    currMinutes < 10 ? currMinutesStr = "0" + currMinutes.toString() : currMinutesStr = currMinutes.toString();
    timesArr.push(currHourStr + ":" + currMinutesStr);
    currMinutes += step;

    if (currMinutes >= 60) {
      currMinutes = 0;
      currHour += 1;
    }

    if (currHour == 24) {
      currHour = 0;
    }
  
    if (currHour == closeHour) {
      currHour < 10 ? currHourStr = "0" + currHour.toString() : currHourStr = currHour.toString();
      currMinutes < 10 ? currMinutesStr = "0" + currMinutes.toString() : currMinutesStr = currMinutes.toString();
      timesArr.push(currHourStr + ":" + currMinutesStr);
      isDone = true;
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
  

  dateSchedule: Date;
  timeSchedule: string;
  totalPrice: number;
  totalDuration: number; 
  times = []
  isDateFilled: boolean = false;

  constructor() { }

  ngOnInit() {
    this.times = getTimeRanges(9, 21, 30);
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

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.

    return day !== 6 && new Date() <= d;
  }

  next() {
    let time: string[] = this.timeSchedule.split(':');
    this.dateSchedule.setHours(parseInt(time[0]), parseInt(time[1]));
    
    this.scheduleOutside.emit(this.dateSchedule);
  }

  isValidDate() {
    return (this.dateSchedule instanceof Date);
  }
}
