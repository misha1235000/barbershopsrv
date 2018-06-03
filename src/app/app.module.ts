import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
         MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule, MatInputModule,
         MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatExpansionModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatGridListModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TypeListComponent } from './appointment/type/type-list.component';
import { AppointmentTypeService } from './appointment/appointment.service';
import { ProductService } from './products/product.service';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ImageProductComponent } from './products/image-product/image-product.component';
import { ScheduleComponent } from './appointment/schedule/schedule.component';

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
    SidenavComponent,
    AppointmentComponent,
    TypeListComponent,
    AddAppointmentComponent,
    MaincontentComponent,
    ProductsComponent,
    PageNotFoundComponent,
    HomeComponent,
    ImageProductComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule, FormsModule,
    MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, ReactiveFormsModule, MatSelectModule,
    MatExpansionModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatGridListModule
  ],
  exports: [
    MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatExpansionModule,
    MatDividerModule, MatCheckboxModule, MatTabsModule, MatGridListModule
  ],
  entryComponents: [AddAppointmentComponent, ImageProductComponent],
  providers: [AppointmentTypeService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
