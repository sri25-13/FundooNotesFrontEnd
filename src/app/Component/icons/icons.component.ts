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
  @Input() notes: any;
  note: Note = new Note();
  @Output() output: EventEmitter<any> = new EventEmitter();
  time = "8:00 AM";
  repeat = "daily";
  reminder: Note = new Note();
  day = "Today";
  todayString: string = new Date().toDateString();
  constructor(private snackBar:MatSnackBar,private service:NoteservicesService,) { }
  ngOnInit() {
  }
  setRepitation(repeat) {
    this.repeat = repeat;
  }

  setTime(time) {
    this.time = time;
  }
  saveReminder(date) {
    debugger;
    let str: any;
    if (date != "") {
      let res = new Date(date);
      str = res.toDateString();
    }
    else str = this.day;
    let remin = str + " " + this.time;

    if (this.notes.noteId != undefined) {
      debugger;
      this.service.setReminder(this.notes.noteId, remin).subscribe((result) => {
        console.log(result);
        this.snackBar.open('Reminder set', '', { duration: 2000 });
      })
    }
  }
  isArchive()
    {
      console.log(this.notes.noteId);
      this.service.archeive(this.notes.noteId).subscribe(
        (result) => {
          this.output.emit({name:''});
          this.snackBar.open('Archived', 'Dismiss', { duration: 3000 });
        // },
        // (error) => {
        //   this.snackBar.open('unarcheive', '', { duration: 3000 });
      });
    }
    setColor(changeColor) {
       debugger;
      this.service.setcolor(this.notes.noteId, changeColor).subscribe(
        (result) => {
        console.log(result);
        this.output.emit({name:'getAllNote'});
        this.snackBar.open('color changed ', 'Dismiss', { duration: 3000 });
      },
        (error) => {
          console.log('error ', error);
          this.snackBar.open('error ', 'Dismiss', { duration: 3000 });
        });
  
    }
    colours = [
      [
        { color: "rgb(255,255,255)", name: "Default" },
        { color: "rgb(242, 139, 130)", name: "Red" },
        { color: "rgb(251, 188, 4)", name: "Orange" },
        { color: "rgb(255, 244, 117)", name: "Yellow" }
      ],
      [
        { color: "rgb(204, 255, 144)", name: "Green" },
        { color: "rgb(167, 255, 235)", name: "Teal" },
        { color: "rgb(203, 240, 248)", name: "Blue" },
        { color: "rgb(174, 203, 250)", name: "Dark blue"}
      ],
      [
        { color: "rgb(215, 174, 251)", name: "Purple" },
        { color: "rgb(253, 207, 232)", name: "Pink" },
        { color: "rgb(230, 201, 168)", name: "Brown" },
        { color: "rgb(232, 234, 237)", name: "Gray" }
      ]
    ]
    deleteNote() {
      debugger;
      if (this.notes.noteId != null) {
        this.service.sendToTrash(this.notes.noteId).subscribe(
          (result) => {
            this.output.emit({name:'getAllNote'});
          this.snackBar.open('Note sent to trash', 'Dismiss', { duration: 3000 });
        },
          (error) => {
            console.log('error :', error);
            this.snackBar.open('error in sending to trash', '', { duration: 2000 });
          }
        );
      }
    }

  }