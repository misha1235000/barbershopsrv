import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
         MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule, MatInputModule,
         MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatExpansionModule, MatDividerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentService } from './appointment/appointment.service';
import { ProductService } from './products/product.service';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'appointments', component: AppointmentComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AppointmentsComponent,
    AppointmentsListComponent,
    SidenavComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AddAppointmentComponent,
    MaincontentComponent,
    ProductsComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, ReactiveFormsModule, MatSelectModule,
    MatExpansionModule, MatDividerModule
  ],
  exports: [
    MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatExpansionModule,
    MatDividerModule
  ],
  entryComponents: [AddAppointmentComponent],
  providers: [AppointmentService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
