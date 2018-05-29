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
var material_1 = require("@angular/material");
var add_appointment_component_1 = require("./add-appointment/add-appointment.component");
var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent(dialog) {
        this.dialog = dialog;
    }
    AppointmentComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(add_appointment_component_1.AddAppointmentComponent, {
            width: '800px',
            height: '500px',
            // data: { name: this.name, animal: this.animal }
            data: { test: 123 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    AppointmentComponent.prototype.ngOnInit = function () {
    };
    AppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-appointment',
            templateUrl: './appointment.component.html',
            styleUrls: ['./appointment.component.css']
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], AppointmentComponent);
    return AppointmentComponent;
}());
exports.AppointmentComponent = AppointmentComponent;
//# sourceMappingURL=appointment.component.js.map