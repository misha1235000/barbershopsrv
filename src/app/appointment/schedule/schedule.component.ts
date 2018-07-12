import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppointmentService } from '../appointment.service';

class Time {
  display: string;
  value: number;

  constructor(display: string, value: number) {
    this.display = display;
    this.value = value;
  }
}

const OPEN_HOUR = "09:00";
const CLOSE_HOUR = "21:00";
const STEP = 10;

/**
 * This function generates the times that will be shown in the select.
 * 
 * @param openTime - The open time of the bussines - hh:mm.
 * @param closeTime - The close time of the bussines - hh:mm.
 * @param step - Step between appointment times.
 * @param date - The date of the specific day that was chosen in the datepicker
 * @returns - The time array of the time ranges.
 */
function getTimeRanges(openTime: string, closeTime: string, step: number, date: Date): Time[] {
  let timesArr: Time[] = [];
  let closeMinute: number = parseInt(closeTime.split(':')[1]);
  let closeHour: number = parseInt(closeTime.split(':')[0]);
  let openHour: number = parseInt(openTime.split(':')[0]);
  let openMinute: number = parseInt(openTime.split(':')[1]);
  let currHour: number = openHour;
  let currMinute: number = openMinute;
  let currHourStr: string;
  let currMinutesStr: string;
  let isDone: boolean = false;

  // While it didnt finish the appointment types.
  while(!isDone) {
    
    // Prettify the hour/minute.
    currHour < 10 ? currHourStr = "0" + currHour.toString() : currHourStr = currHour.toString();
    currMinute < 10 ? currMinutesStr = "0" + currMinute.toString() : currMinutesStr = currMinute.toString();

    date.setHours(currHour, currMinute);

    // Checks if the current date is earlier than the given date.
    if (new Date().getTime() < date.getTime()) {
      timesArr.push(new Time(currHourStr + ":" + currMinutesStr, date.getTime()));
    }

    // Checks if the loop needs to be finished and the time ranges are ready.
    if(currHour === closeHour && currMinute === closeMinute) {
      isDone = true;
      break;
    }

    // Adds the step to the current minutes.
    currMinute += step;

    // Checks if the current minute is higher than 60 to reset it to 0.
    if (currMinute >= 60) {
      currMinute = 0;
      currHour += 1;
    }

    // Checks if the curent hour is 24 to reset it to 0.
    if (currHour == 24) {
      currHour = 0;
    }
  }

  return timesArr;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  @Input() types = [];
  @Input() currSelectedTab;
  @Output() scheduleOutside = new EventEmitter<any>();
  @Output('opened') openedStream = new EventEmitter<void>();
  

  dateSchedule: Date;
  timeSchedule: Time;
  totalPrice: number;
  totalDuration: number; 
  times: Time[] = [];
  isDateFilled = false;

  /**
   * Injects the service of the appointment.
   * @param appointmentService
   */
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  /**
   * Each change of the component, will reset
   * the price and the duration, and calculate it again.
   */
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

  /**
   * Filters the valid hours that are available according
   * to the appointment on a specific date
   * @param event 
   */
  filterValid(event): void {
    if (event && this.isValidDate()) {
      let closeDate = new Date(event);

      closeDate.setHours(parseInt(CLOSE_HOUR.split(':')[0]), parseInt(CLOSE_HOUR.split(':')[1]));
      closeDate.setMinutes(closeDate.getMinutes() - this.totalDuration);
    

      this.appointmentService.get(event.getDate().toString() + "-" +
                                 (event.getMonth() + 1).toString() + "-" +
                                  event.getFullYear().toString()).subscribe((appointments) => {
        this.times = getTimeRanges(OPEN_HOUR, closeDate.getHours().toString() + ":" +
                                   closeDate.getMinutes().toString(), STEP, event);
        
        appointments.forEach(appointment => {
          for (let i = 0; i < this.times.length; i++) {
            let dateTo = new Date(this.times[i].value);

            dateTo.setMinutes(dateTo.getMinutes() + this.totalDuration);

            if ((this.times[i].value >= appointment.datefrom && this.times[i].value <= appointment.dateto) ||
                (dateTo.getTime() > appointment.datefrom && dateTo.getTime() <= appointment.dateto)        ||
                (this.times[i].value < appointment.datefrom && dateTo.getTime() > appointment.dateto)      ||
                 dateTo.getTime() > closeDate.getTime()) {
                  this.times.splice(i, 1);
                  i--;
            }
          }
        })
      }, (err) => {
        console.log(err);
      });
    }
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();

    // Prevent Saturday from being selected.
    return ((d.getTime() >= new Date().getTime() && day !== 6) ||
            (day !== 6 && d.getDate() == new Date().getDate()  &&
             d.getMonth() == new Date().getMonth()             &&
             d.getFullYear() == new Date().getFullYear()));
  }

  /**
   * 
   */
  next(): void {
    let time: string[] = this.timeSchedule.display.split(':');
    let dateMilliseconds: number;
    let dateMillisecondsTo: number;
    let dateScheduleTo: Date;

    this.dateSchedule.setHours(parseInt(time[0]), parseInt(time[1]));
    dateMilliseconds = this.dateSchedule.getTime();
    dateScheduleTo = new Date(this.dateSchedule);
    dateScheduleTo.setMinutes(this.dateSchedule.getMinutes() + this.totalDuration);
    dateMillisecondsTo = dateScheduleTo.getTime();

    this.scheduleOutside.emit({'date': dateMilliseconds,  'dateto': dateMillisecondsTo, 'types': this.types.map(type => type._id)});
  }

  /**
   * Checks if the date is valid or not
   */
  isValidDate(): boolean {
    let currDate = new Date();
    let currYear: number = currDate.getFullYear();
    let currMonth: number = currDate.getMonth() + 1;

    return (this.dateSchedule instanceof Date           &&
            this.dateSchedule.getFullYear() >= currYear &&
            this.dateSchedule.getMonth() + 1 >= currMonth);
  }

  /**
   * 
   * @param picker
   */
  loadMonth(picker) {
    let currMonth = (new Date().getMonth() + 1).toString() + "-" + (new Date().getFullYear()).toString();

    this.appointmentService.getByMonth(currMonth).subscribe((appointments) => {
      console.log(appointments);
    });

    picker.open();
  }
}