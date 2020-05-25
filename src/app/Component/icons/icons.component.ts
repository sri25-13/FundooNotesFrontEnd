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
    setColor(changeColor) {
      this.service.setcolor(this.notes.noteId, changeColor).subscribe((result) => {
        console.log(result);
        this.snackBar.open('color changed ', 'Dismiss', { duration: 3000 });
      },
        (error) => {
          console.log('error ', error);
          this.snackBar.open('error ', 'Dismiss', { duration: 3000 });
        });
  
    }
    colors = [
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
  }