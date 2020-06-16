import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
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
  @Input() labels:any;
  listOfNotes: any=[];
  searchText:string;
  listofCollab:any=[];
  listOfLabels:any=[];
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
getAllLabels()
{
  this.service.getallLabels().subscribe(
    listOfLabels=>{
      this.listOfLabels=listOfLabels;
      console.log(this.listOfLabels);
    });
}
getoutput()
{
  this.getAllNote();
  this.getAllCollaborator();
  this.getAllLabels();
}
  ngOnInit() {
    this.dataService.shareSearchText.subscribe(x=>this.searchText=x);
    this.getAllNote();
    this.getAllCollaborator();
    this.getAllLabels();
  }
}