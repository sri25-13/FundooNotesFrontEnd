import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/Services/data.service';
import { CollaboratorService } from 'src/app/Services/collaborator.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  listOfNotes: any=[];
  searchText:string;
  listofCollab:any=[];
  constructor(private service:NoteservicesService,private collabService:CollaboratorService,private dataService:DataService,private snackBar:MatSnackBar) { }
getAllNote()
{
  this.service.getAllNotes().subscribe(
    listOfNotes=>{
    this.listOfNotes=listOfNotes;
    console.log(this.listOfNotes);
    });
}
getAllCollaborator()
{
  this.collabService.getAllcollaborators().subscribe(
    listofCollab=>{
      this.listofCollab=listofCollab;
      console.log(this.listofCollab);
    });
}
getoutput()
{
  this.getAllNote();
  this.getAllCollaborator();
}
  ngOnInit() {
    this.dataService.shareSearchText.subscribe(x=>this.searchText=x);
    this.getoutput();
  }
}