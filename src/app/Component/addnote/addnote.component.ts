import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteservicesService } from 'src/app/Services/noteservices.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  popup: boolean;

  constructor(private snackBar:MatSnackBar,private service:NoteservicesService) { }

  ngOnInit() {
  }
  open() {
    this.popup = true;
  }
  submit()
  {
    this.popup=false;
  }
   close(title,description)
   {
     const form={
        title,
        description,
     };
     if(title!=""|| description!="")
     {
     this.service.createnote(form).subscribe(
      (result) => {
        this.snackBar.open('Note created', '', { duration: 3000 });
        this.submit();
      },
  
      (error) => {
        this.snackBar.open('unable to create note', '', { duration: 3000 });
    });
     }
     else{
       this.submit();
     }
     }
    }

