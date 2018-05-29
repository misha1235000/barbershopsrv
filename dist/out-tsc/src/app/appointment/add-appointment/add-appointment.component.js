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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var AddAppointmentComponent = /** @class */ (function () {
    function AddAppointmentComponent(formBuilder, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.myFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6 && d.getDate() !== 17;
        };
    }
    AddAppointmentComponent.prototype.AssignAppointment = function () {
        this.dialogRef.close();
    };
    AddAppointmentComponent.prototype.CloseAppointment = function () {
        this.dialogRef.close();
    };
    AddAppointmentComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['', forms_1.Validators.required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', forms_1.Validators.required]
        });
    };
    AddAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-add-appointment',
            templateUrl: './add-appointment.component.html',
            styleUrls: ['./add-appointment.component.css']
        }),
        __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [forms_1.FormBuilder, material_1.MatDialogRef, Object])
    ], AddAppointmentComponent);
    return AddAppointmentComponent;
}());
exports.AddAppointmentComponent = AddAppointmentComponent;
//# sourceMappingURL=add-appointment.component.js.map