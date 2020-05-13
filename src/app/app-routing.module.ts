import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgotPasswordComponent } from './Component/forgotPassword/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';

const routes: Routes = [
  {path : 'register',component: RegisterComponent},
  {path : 'login',component: LoginComponent },
  {path : 'forgotpassword',component:ForgotPasswordComponent},
  {path : 'reset',component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
