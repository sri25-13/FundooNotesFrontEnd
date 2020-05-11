import { Component, OnInit } from '@angular/core';
 import {FormControl, Validators} from '@angular/forms';
 import {MatSnackBar} from '@angular/material/snack-bar';
 import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService,private snackBar: MatSnackBar) { }
  firstName = new FormControl('', [ 
    Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]*'), ]);
    ngOnInit() {
    }
    lastName = new FormControl('', [ Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'), ]);
   email = new FormControl('', [ Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), ]);
     password = new FormControl('', [ Validators.required, Validators.minLength(6), ]);
     confirmpassword = new FormControl('', [ Validators.required, Validators.minLength(6),]);
  registration() {
    debugger;
    let fname = new String(this.firstName.value);
    let lname = new String(this.lastName.value);
    let pwd = new String(this.password.value);
    let cpwd=new String(this.confirmpassword.value);
    if (fname.length >= 4 && lname.length >= 4 && pwd.length >= 6 && pwd==cpwd) {
      const form = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        password: this.password.value,
        confirmpassword:this.confirmpassword.value
      };
      this.service.registration(form).subscribe(
        (result) => {
          console.log('result :', result);
          this.snackBar.open('Registered Successfully', 'Dismiss', { duration: 2000 });
        });
    }
        (_error: any) => {
          this.snackBar.open('Registration Failed. invalid credentials', '', { duration: 2000 });
      };
  }
}
