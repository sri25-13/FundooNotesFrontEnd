import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private service:UserService,private snackBar:MatSnackBar) { }
  email = new FormControl('', [ Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), ]);
 
  password = new FormControl('', [ Validators.required, Validators.minLength(6), ]);
  confirmpassword = new FormControl('', [ Validators.required, Validators.minLength(6),]);
  ngOnInit() {
  }
 reset(){
   debugger;
    let pwd = new String(this.password.value);
    if( pwd.length>=6)
    {
     const form = {
       email:this.email.value,
       password: this.password.value,
       confirmpassword:this.confirmpassword.value
     };
     this.service.Reset(form).subscribe(
       (result) => {
         this.snackBar.open('Registered Successfully', 'Dismiss', { duration: 3000 });
       },
   
       (error) => {
         this.snackBar.open('Registration Failed. invalid credentials', '', { duration: 3000 });
     });
   }
 }
}
