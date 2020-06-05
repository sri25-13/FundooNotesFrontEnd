import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotesComponent } from './Component/notes/notes.component';
import { TrashComponent } from './Component/trash/trash.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { ReminderComponent } from './Component/reminder/reminder.component';

const routes: Routes = [
  {path : 'register',component: RegisterComponent},
  {path : 'login',component: LoginComponent },
  {path : 'forgotpassword',component:ForgotPasswordComponent},
  {path : 'reset',component:ResetPasswordComponent},
  {path : 'dashboard',component:DashboardComponent,
  children:[
     {path : 'notes',component:NotesComponent} ,
     {path : 'trash',component:TrashComponent} ,
     {path : 'archive',component:ArchiveComponent},
     {path : 'reminder',component:ReminderComponent}
   ]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
