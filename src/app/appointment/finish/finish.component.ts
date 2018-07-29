import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {
  @Input() price;
  @Input() appointmentScheduled;

  types;
  totalPrice: number;
  totalDuration: number;

  constructor() { }

  ngOnInit() {
    this.types = this.appointmentScheduled.types;
    this.totalPrice = this.appointmentScheduled.price;
    this.totalDuration = this.appointmentScheduled.duration;
  }

}
