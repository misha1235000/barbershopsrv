import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
         MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule, MatInputModule,
         MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatExpansionModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatGridListModule, MatCalendar} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TypeListComponent } from './appointment/type/type-list.component';
import { AppointmentService } from './appointment/appointment.service';
import { AppointmentTypeService } from './appointment/type/type-list.service';
import { ProductService } from './products/product.service';
import { VerifyService } from './appointment/verify/verify.service';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ImageProductComponent } from './products/image-product/image-product.component';
import { ScheduleComponent } from './appointment/schedule/schedule.component';
import { VerifyComponent } from './appointment/verify/verify.component';

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
    MaincontentComponent,
    ProductsComponent,
    PageNotFoundComponent,
    HomeComponent,
    ImageProductComponent,
    ScheduleComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserAnimationsModule, FormsModule,
    MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, ReactiveFormsModule, MatSelectModule,
    MatExpansionModule, MatDividerModule, MatCheckboxModule, MatTabsModule, MatGridListModule, MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule, MatListModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
    MatSidenavModule, MatStepperModule, MatFormFieldModule, MatTooltipModule, MatDialogModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatExpansionModule,
    MatDividerModule, MatCheckboxModule, MatTabsModule, MatGridListModule, MatProgressSpinnerModule
  ],
  entryComponents: [ImageProductComponent],
  providers: [AppointmentTypeService, AppointmentService, ProductService, VerifyService, MatCalendar],
  bootstrap: [AppComponent]
})
export class AppModule { }
