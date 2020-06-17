import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import {       } from 'src/app/Component/displaynote/displaynote.component';
import { Note } from 'src/app/Model/notes.model';
import { CollaboratorService } from 'src/app/Services/collaborator.service';
import { MatDialog } from '@angular/material/dialog';
import { Collaborator } from 'src/app/Model/Collaborator.model';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { Label } from 'src/app/Model/label.model';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notes: any;
  @Input() onAddNote:boolean=false;
  note: Note = new Note();
  @Input() labels:any;
  label: Label = new Label();
  @Output() output: EventEmitter<any> = new EventEmitter();
  @Output() notify: EventEmitter<any> = new EventEmitter();
  time = "8:00 AM";
  repeat = "daily";
  reminder: Note = new Note();
  day = "Today";
   @Input() collabo:any;
  todayString: string = new Date().toDateString();
  colla :Collaborator=new Collaborator();
  constructor(private snackBar:MatSnackBar,public dialog: MatDialog,private service:NoteservicesService,private collaboratorService:CollaboratorService) { }
  ngOnInit() {
  }
  newLabel(labelname) {
    debugger
    if (labelname != null && labelname != '') {
      this.label.labelname = labelname;
      this.label.noteId = this.notes.noteId;
      this.label.email=localStorage.getItem('Email');
      this.service.addLabel(this.label).subscribe((Response) => {
        console.log(Response);
        this.notify.emit('done');
      });
    }
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

    // if (this.notes.noteId != undefined) {
      if(this.onAddNote){
        this.output.emit({name:'reminder',value:remin});
      }
      
      else{
        debugger;
        this.service.setReminder(this.notes.noteId, remin).subscribe((result) => {
          console.log(result);
          this.output.emit({name:'getAllNote'});
          this.snackBar.open('Reminder set', '', { duration: 2000 });
        })
      }
    // }
  }
  collaborator() {
    debugger;
    this.colla.noteId=this.notes.noteId;
    const dialogRef = this.dialog.open(CollaboratorComponent, {
    data: { collab: this.colla ,collaborators:this.collabo},
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
    console.log(result.collaborateData);
      if(result.collaborateData){
        this.collaboratorService.addCollaborator(result.collaborateData).subscribe(Response => {
          console.log(Response);
          this.notify.emit('done');
        });
      }
      else if(result.deleteCol){
        this.collaboratorService.deleteCollaborator(result.deleteCol).subscribe(Response => {
          console.log(Response);
          this.notify.emit('done');
        });
      }
      else
      {
        if(result.collaborateData == undefined)
        {
        console.log('No Collaborator Added');
        }
      }
    });
  }
  isArchive()
    {
      if(this.onAddNote){
        this.output.emit({name:'archive'});
      }
      else
      {
      console.log(this.notes.noteId);
      this.service.archeive(this.notes.noteId).subscribe(
        (result) => {
           this.output.emit({name:'getAllNote'});
          this.snackBar.open('Archived', 'Dismiss', { duration: 3000 });
         },
         (error) => {
           this.snackBar.open('unarcheive', '', { duration: 3000 });
      });
      }
  }
    setColor(changeColor) {
      if(this.onAddNote){
        this.output.emit({name:'changecolor',value:changeColor});
      }
      else
      {
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