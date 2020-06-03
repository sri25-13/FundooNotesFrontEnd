import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  listOfNotes: any=[];
  constructor(private service:NoteservicesService,private snackBar:MatSnackBar) { }
getAllNote()
{
  this.service.getAllNotes().subscribe(
    listOfNotes=>{
    this.listOfNotes=listOfNotes;
    console.log(this.listOfNotes);
    });
}
  ngOnInit() {
    this.getAllNote();
  }
}