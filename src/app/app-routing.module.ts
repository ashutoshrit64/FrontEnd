import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from "./Components/registration/registration.component";
import { ForgotComponent } from "./Components/forgot/forgot.component";
import { ResetpasswordComponent } from "./Components/resetpassword/resetpassword.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'forgot',
    component:ForgotComponent

  },
  {
    path:'reset/:token',
    component:ResetpasswordComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
