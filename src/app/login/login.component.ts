import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService,private route:Router,private snackBar: MatSnackBar) { }
  email = new FormControl('', [ Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), ]);
  password = new FormControl('', [ Validators.required, Validators.minLength(6), ]);
  ngOnInit() {
  }
  login() {
    debugger;
    let pwd = new String(this.password.value);
    if (pwd.length >= 6  ) {
      const details = {
        password: this.password.value,
        email:this.email.value,
      };
      this.service.Login(details).subscribe(
        (result) => {
          this.snackBar.open('login Successfull', 'Dismiss', { duration: 3000 });
          this.route.navigate(['/dashboard/notes']);
        },
        (error) => {
          this.snackBar.open('login Failed. invalid credentials', '', { duration: 1000 });
      });
  }
 }
}