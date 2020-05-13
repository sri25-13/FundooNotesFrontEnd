import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor( private service:UserService,private snackBar:MatSnackBar) { }
  email = new FormControl('', [ Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), ]);
  ngOnInit() {
  }
  forgot(){
      const details = {
        email:this.email.value,
      };
      this.service.Forgot(details).subscribe(
        (result) => {
          this.snackBar.open('Check your email to reset password', 'Dismiss', { duration: 3000 });
        },
    
        (error) => {
          this.snackBar.open('Invalid credentials', '', { duration: 1000 });
      });
    }
  }