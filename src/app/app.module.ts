import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ButtonModule } from "primeng/button";
import {AccordionModule} from 'primeng/accordion';
import { RegistrationComponent } from './Components/registration/registration.component';     //accordion and accordion tab
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/primeng';
import {MatCardModule} from '@angular/material/card';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import { Component, OnInit } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotComponent,
    ResetpasswordComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    SelectButtonModule,
    MatCardModule,
    ToolbarModule,
    SidebarModule,
    MatInputModule,
    MatIconModule,
    NgbModule
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
