import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {
  @Input() types;
  @Input() price;

  constructor() { }

  ngOnInit() {
  }

}
