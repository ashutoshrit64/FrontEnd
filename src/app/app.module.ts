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
import {DialogModule} from 'primeng/dialog';
import { Component, OnInit } from '@angular/core';
import {CardModule} from 'primeng/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SelectButtonModule } from 'primeng/selectbutton';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './Components/forgot/forgot.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule, MatSidenavModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChipsModule} from 'primeng/chips';
import { VerifyComponent } from './Components/verify/verify.component';
import { DemoMaterialModule } from './material-module';
import { NotesComponent } from './Components/notes/notes.component';
import { AllnotesComponent } from './Components/allnotes/allnotes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { DialogComponent } from './Components/dialog/dialog.component';
import { NotePipe } from "./pipe/note.pipe";
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchivepipePipe } from './pipe/pipe/archieve/archivepipe.pipe';
import {ColorPickerModule} from 'primeng/colorpicker';
import { PinPipe } from './pipe/pipe/pinned/pin.pipe';
import { LabeldialogComponent } from './Components/labeldialog/labeldialog.component';
import { ReminderComponent } from './Components/reminder/reminder.component';
 
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotComponent,
    ResetpasswordComponent,
    DashboardComponent,
    VerifyComponent,
    NotesComponent,
    AllnotesComponent,
    IconsComponent,
    DialogComponent,
    NotePipe,
    ArchiveComponent,
    TrashComponent,
    ArchivepipePipe,
    PinPipe,
    LabeldialogComponent,
    ReminderComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    DialogModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    FlexLayoutModule,
    CalendarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    SelectButtonModule,
    MatCardModule,
    ToolbarModule,
    MatButtonModule,
    SidebarModule,
    MatInputModule,
    MatIconModule,
    ChipsModule,
    NgbModule,
    DemoMaterialModule,
    CardModule,
    ColorPickerModule
    // HttpClient
  ],
  entryComponents:[
    DialogComponent
  ],
  providers: [AppModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
