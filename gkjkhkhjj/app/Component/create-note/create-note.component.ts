import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NoteServicesService } from 'src/app/Service/note-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Note } from 'src/app/models/notes.model';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  popup: boolean = false;
  notes: Note = new Note();
  @Input() note : any;
  @Input() reminder: any;
  @Input() label: any;
  noteColor: string;
  archive = 0;
  pin = 0;
  time = "8:00 AM";
  repeat = "daily";
  day = "Today";
  @Output() output: EventEmitter<any> = new EventEmitter();
  constructor(private noteService: NoteServicesService, private snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  open() {
    this.popup = true;
  }
  createNote(title, description) {
    this.popup = false;
    if (title != "" || description != "") {
      this.notes.title = title;
      this.notes.description = description;
      this.notes.changeColor = this.noteColor;
      this.notes.pin = this.pin;
      this.notes.archive = this.archive;
      this.notes.reminder = this.reminder;
      this.noteService.createNoteService(this.notes).subscribe((result) => {
        console.log(result);
        this.snackBar.open('Note Created', '', { duration: 2000 });
        this.afterSubmit();
        this.output.emit("ok");
      },
        (error) => {
          this.snackBar.open('Error in creating', '', { duration: 2000 });
          console.log('error response', error);
        });
    }
    else {
      this.afterSubmit();
    }
  }

  afterSubmit() {
    this.popup = false;
    this.noteColor = null;
    this.archive = 0;
  }
  setColor(changeColor) {
    this.noteColor = changeColor;
  }
  save(date) {
    let str: any;
    if (date != "") {
      let v = new Date(date);
      str = v.toDateString();
    }
    else str = this.day;
    this.reminder = str + " " + this.time;
  }

  close() {
    this.reminder = null;
  }
  
  addLabels(label){
    this.label=label;
  }

  closelabel() {
    this.label = null;
  }

  listOfColors = [
    [
      { color: "rgb(255,255,255)", name: "white" },
      { color: "rgb(137,207,240)", name: "blue" },
      { color: "rgb(75,0,130)", name: "indigo" },
      { color: "rgb(167,252,0)", name: "green" }
    ],
    [
      { color: "rgb(229,43,80)", name: "red" },
      { color: "rgb(0,198,128)", name: "teal" },
      { color: "rgb(255,215,0)", name: "yellow" },
      { color: "rgb(181,126,220)", name: "violet" }
    ],
    [
      { color: "rgb(0,255,255)", name: "cyan" },
      { color: "rgb(253,108,158)", name: "pink" },
      { color: "rgb(150,75,0)", name: "brown" },
      { color: "rgb(128,128,128)", name: "gray" }
    ]
  ]
  isPin()
  {
    if(this.pin==0)
    {
      this.pin=1;
    }
    else{
      this.pin=0;
    }
  }
  isArchive() { 
    if (this.archive == 0) {
      this.archive = 1;
      this.snackBar.open('Note Archived', 'Dismiss', { duration: 2000 });
    }
    else {
      this.archive = 0;
      this.snackBar.open('Note UnArchived', 'Dismiss', { duration: 2000 });
    }
  }
  setTime(value) {
    this.time = value;
  }

  setRepitation(value) {
    this.repeat = value;
  }
}
