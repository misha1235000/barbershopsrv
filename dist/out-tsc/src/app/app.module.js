"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var toolbar_component_1 = require("./toolbar/toolbar.component");
var appointments_component_1 = require("./appointments/appointments.component");
var appointments_list_component_1 = require("./appointments/appointments-list/appointments-list.component");
var sidenav_component_1 = require("./sidenav/sidenav.component");
var appointment_component_1 = require("./appointment/appointment.component");
var appointment_list_component_1 = require("./appointment/appointment-list/appointment-list.component");
var appointment_service_1 = require("./appointment/appointment.service");
var add_appointment_component_1 = require("./appointment/add-appointment/add-appointment.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                toolbar_component_1.ToolbarComponent,
                appointments_component_1.AppointmentsComponent,
                appointments_list_component_1.AppointmentsListComponent,
                sidenav_component_1.SidenavComponent,
                appointment_component_1.AppointmentComponent,
                appointment_list_component_1.AppointmentListComponent,
                add_appointment_component_1.AddAppointmentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatCardModule, material_1.MatListModule, material_1.MatTableModule, material_1.MatButtonModule, material_1.MatToolbarModule, material_1.MatIconModule,
                material_1.MatSidenavModule, material_1.MatStepperModule, material_1.MatFormFieldModule, material_1.MatTooltipModule, material_1.MatDialogModule,
                material_1.MatDatepickerModule, material_1.MatNativeDateModule, material_1.MatInputModule, forms_1.ReactiveFormsModule
            ],
            exports: [
                material_1.MatCardModule, material_1.MatListModule, material_1.MatTableModule, material_1.MatButtonModule, material_1.MatToolbarModule, material_1.MatIconModule,
                material_1.MatSidenavModule, material_1.MatStepperModule, material_1.MatFormFieldModule, material_1.MatTooltipModule, material_1.MatDialogModule,
                material_1.MatDatepickerModule, material_1.MatNativeDateModule, material_1.MatInputModule
            ],
            entryComponents: [add_appointment_component_1.AddAppointmentComponent],
            providers: [appointment_service_1.AppointmentService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map