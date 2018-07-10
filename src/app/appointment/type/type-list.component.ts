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

  appointmentTypes: any = [];
  checkedTypes: any = [];
  
  // Injection of the appointment service.
  constructor(private appointmentService: AppointmentTypeService) { }

  /**
   *  When the component inits, get all the appointment types.
   */
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

  /**
   * Handles the type list.
   * @param type 
   */
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

  /**
   * When a type is checked, emit to the appointment whether something is checked
   */
  onCheck() {
    this.isChecked.emit(this.checkedTypes.length > 0 ? true : false);
  }

  // When next is pressed, emit the type list chosen to the appointment.
  next() {
    this.checkedTypesOutside.emit(this.checkedTypes);
  }

}
