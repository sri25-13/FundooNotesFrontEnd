import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './Component/register/register.component';
import {LoginComponent} from './Component/login/login.component';
import {ForgotPasswordComponent} from './Component/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './Component/reset-password/reset-password.component';
import {DashBoardComponent} from './Component/dash-board/dash-board.component';
import { IconsComponent } from './Component/icons/icons.component';
import { DisplayComponent } from './Component/display/display.component';
import { LabelNoteComponent } from './Component/label-note/label-note.component';


const routes: Routes = [
  {path : '',component: RegisterComponent},
  {path : 'icons',component: IconsComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'login',component:LoginComponent},
  {path : 'forgotPassword',component:ForgotPasswordComponent},
  {path : 'resetPassword',component:ResetPasswordComponent},
  {path : 'dashBoard',component:DashBoardComponent,
children:[
  {path : 'display', component:DisplayComponent},
  {path : 'labels', component:LabelNoteComponent},
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
