import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import {       } from 'src/app/Component/displaynote/displaynote.component';
import { Note } from 'src/app/Model/notes.model';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
 input:object;
  @Input() notes: any;
  note: Note = new Note();
  constructor(private snackBar:MatSnackBar,private service:NoteservicesService,) { }
  ngOnInit() {
  }
  isArchive()
    {
      debugger;
      console.log(this.notes.noteId);
      this.service.archeive(this.notes.noteId).subscribe(
        (result) => {
          this.snackBar.open('Archived', 'Dismiss', { duration: 3000 });
        // },
        // (error) => {
        //   this.snackBar.open('unarcheive', '', { duration: 3000 });
      });
    }
  }