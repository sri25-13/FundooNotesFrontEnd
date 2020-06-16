import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import { Note } from 'src/app/Model/notes.model';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/Services/data.service';
import { debug } from 'util';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() result:any;
  @Input() notes: Note = new Note();
  @Input() collaborator:any;
  @Input() labels:any;
  @Output() output: EventEmitter<any> = new EventEmitter();
  @Output() notify:EventEmitter<any>=new EventEmitter();
  @Input() note:any;
  text: string;
  width: any;
  margin: any;
  constructor(private service: NoteservicesService,private data: DataService,private snackBar:MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.width=this.data.currentMessage.subscribe(message=>this.width=message);
    this.margin=this.data.currentMessage1.subscribe(message=>this.margin=message);
  }
  getAllNote(){
    this.output.emit('getAllNote');
  }
  getoutput()
  {
    this.notify.emit('done');
  }
  // getID(data)
  // {
  // debugger;
  // this.note=data.noteId;
  // console.log(this.note);
  // }
  OnClicktoUpdate(result) {
    const dialogRef = this.dialog.open(EditNoteComponent, {
      height: 'auto',
      width: '40%',
      data: { note: result },
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result.updateData) {
         this.service.updateNote(result.updateData).subscribe(response => {
         this.output.emit({name:'getAllNote'});
        console.log(response);
        });
        console.log(result.updateData);
      }
    });
  }
  deleteLabel(id)
  {
    this.service.deleteLabel(id).subscribe((result)=>
    {
      debugger
      console.log('result',result);
      this.snackBar.open('Label Deleted','',{duration : 2000});
      this.notify.emit('done');
    },
    (error)=>
    {
      console.log('error',error);
    });
  }
    deleteReminder(id) {
      debugger;
      // this.text.id = id;
      console.log(id);
      this.service.removeReminder(id).subscribe((result )=> {
        console.log('result',result);
        this.snackBar.open('Reminder Deleted','',{duration:3000});
        this.output.emit('done');
      },
      (error)=>
      {
        this.output.emit('done');
        console.log('error',error);
      }
      );
    }
  }