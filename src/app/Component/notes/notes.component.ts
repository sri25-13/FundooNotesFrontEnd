import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  listOfNotes: any=[];
  searchText:string;
  constructor(private service:NoteservicesService,private dataService:DataService,private snackBar:MatSnackBar) { }
getAllNote()
{
  this.service.getAllNotes().subscribe(
    listOfNotes=>{
    this.listOfNotes=listOfNotes;
    console.log(this.listOfNotes);
    });
}
  ngOnInit() {
    this.dataService.shareSearchText.subscribe(x=>this.searchText=x);
    this.getAllNote();
  }
}