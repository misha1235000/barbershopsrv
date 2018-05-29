"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appointment_service_1 = require("../appointment.service");
var APPOINTMENT_DATA = [
/*
{'date': '15/05/2018', 'day': 'שלישי' ,'time':'15:30', 'price':130, 'duration':60, 'products': [5,6]},
{'date': '15/05/2018', 'day': 'שלישי' ,'time':'16:15', 'price':80, 'duration':30, 'products': [5,2]},
{'date': '15/05/2018', 'day': 'שלישי' ,'time':'18:20', 'price':180, 'duration':90, 'products': [2,3]},
{'date': '16/05/2018', 'day': 'רביעי' ,'time':'09:30', 'price':50, 'duration':20, 'products': [5,9,1]},
*/
];
var AppointmentListComponent = /** @class */ (function () {
    function AppointmentListComponent(appointmentService) {
        this.appointmentService = appointmentService;
        this.displayedColumns = ['date', 'day', 'time', 'price', 'duration', 'products', 'edit', 'delete'];
        this.appointmentSource = [];
    }
    AppointmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appointmentService.getAll().subscribe(function (appointments) {
            _this.appointmentSource = appointments;
        }, function (err) {
            console.log(err);
        });
    };
    AppointmentListComponent = __decorate([
        core_1.Component({
            selector: 'app-appointment-list',
            templateUrl: './appointment-list.component.html',
            styleUrls: ['./appointment-list.component.css']
        }),
        __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
    ], AppointmentListComponent);
    return AppointmentListComponent;
}());
exports.AppointmentListComponent = AppointmentListComponent;
//# sourceMappingURL=appointment-list.component.js.map