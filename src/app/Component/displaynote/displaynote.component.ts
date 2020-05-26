import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import { Note } from 'src/app/Model/notes.model';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
@Input() result:any;
@Input() notes: Note = new Note();
@Input() note:any;
@Output() output: EventEmitter<any> = new EventEmitter();
  constructor(private service:NoteservicesService) { }
  
  ngOnInit(){ 
  }
  // getID(data)
  // {
  // debugger;
  // this.note=data.noteId;
  // console.log(this.note);
 
  // }
 
}
