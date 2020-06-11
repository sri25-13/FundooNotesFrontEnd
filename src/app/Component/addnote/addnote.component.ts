import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import { Note } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  popup: boolean;
  @Input() notes:Note =new Note();
    @Output() output:EventEmitter<any>=new EventEmitter();
   form={
    title:'',
    description:'',
    reminder:'',
    archeive:false,
    changeColor:'',
 };
 backgroundColor:'rgb(255,255,255)'
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
     debugger
     this.form.title=title;
     this.form.description=description;
     if(this.form.title!=""|| this.form.description!="")
     {
     this.service.createnote(this.form).subscribe(
      (result) => {
        this.output.emit({name:'getAllNote'});
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

     apiCall(event){
       switch(event['name']){
         case 'reminder': this.form.reminder=event['value']
           break;
           case 'changecolor':this.form.changeColor=event['value']
           this.backgroundColor=event.value;
           break;
           case 'archive':this.form.archeive=true;
           break;
           
       }
     }
    }

