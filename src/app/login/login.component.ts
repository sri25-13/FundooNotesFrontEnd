import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService,private snackBar: MatSnackBar) { }
  email = new FormControl('', [ Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), ]);
  password = new FormControl('', [ Validators.required, Validators.minLength(6), ]);
  ngOnInit() {
  }
  login() {
    let pwd = new String(this.password.value);
    if (pwd.length >= 6  ) {
      const form = {
        password: this.password.value,
      };
      this.service.login(form).subscribe(
        (result) => {
          console.log('result :', result);
          this.snackBar.open('login Successfull', 'Dismiss', { duration: 2000 });
        });
    }
        (_error: any) => {
          this.snackBar.open('login Failed. invalid credentials', '', { duration: 2000 });
      };
  }
}
