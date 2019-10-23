import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from "./Components/registration/registration.component";
import { ForgotComponent } from "./Components/forgot/forgot.component";
import { VerifyComponent } from "./Components/verify/verify.component";
import { ResetpasswordComponent } from "./Components/resetpassword/resetpassword.component";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { AuthGuardService } from "./service/auth-guard.service";
import { NotesComponent } from './Components/notes/notes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: '',
    component: LoginComponent

  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'verify/:token',
    component: VerifyComponent
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
    canActivate: [AuthGuardService],
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'notes',
        component: NotesComponent
      }, {
        path: 'archive',
        component: ArchiveComponent
      }, {
        path: 'trash',
        component: TrashComponent
      }
    
]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
