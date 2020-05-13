import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private service:UserService,private snackBar:MatSnackBar) { }
 
  newpassword = new FormControl('', [ Validators.required, Validators.minLength(6), ]);
  confirmpassword = new FormControl('', [ Validators.required, Validators.minLength(6),]);
  ngOnInit() {
  }
 reset(){
   debugger;
    let pwd = new String(this.newpassword.value);
    if( pwd.length>=6)
    {
     const form = {
       newpassword: this.newpassword.value,
       confirmpassword:this.confirmpassword.value,
     };
     this.service.Reset(form).subscribe(
       (result) => {
         this.snackBar.open('Password reset has done', 'Dismiss', { duration: 3000 });
       },
   
       (error) => {
         this.snackBar.open('Invalid credentials', '', { duration: 3000 });
     });
   }
 }
}
