import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  popup: boolean;
  constructor(private snackBar:MatSnackBar,private service:NoteservicesService) { }
  title = new FormControl('', [ Validators.required, Validators.minLength(6), ]);
     description= new FormControl('', [ Validators.required, Validators.minLength(6),]);
  ngOnInit() {
  }
  open() {
    this.popup = true;
  }
   close()
   {
     debugger;
    
     const form={
        title:this.title.value,
        description:this.description.value,
     };
     this.service.createnote(form).subscribe(
      (result) => {
        this.snackBar.open('Registered Successfully', 'Dismiss', { duration: 3000 });
      },
  
      (error) => {
        this.snackBar.open('Registration Failed. invalid credentials', '', { duration: 3000 });
    });
     }
     }
      
   
  

