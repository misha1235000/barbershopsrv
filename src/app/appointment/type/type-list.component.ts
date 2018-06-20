import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppointmentTypeService } from './type-list.service';


@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  @Output() checkedTypesOutside = new EventEmitter<any>();
  @Output() isChecked = new EventEmitter<boolean>();
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

  onCheck() {
    this.isChecked.emit(this.checkedTypes.length > 0 ? true : false);
  }

  next() {
    this.checkedTypesOutside.emit(this.checkedTypes);
  }

}
