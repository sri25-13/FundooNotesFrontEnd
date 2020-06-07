import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import { Note } from 'src/app/Model/notes.model';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() result:any;
  @Input() notes: Note = new Note();
  @Output() output: EventEmitter<any> = new EventEmitter();
  constructor(private service: NoteservicesService,private snackBar:MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
  }
  getAllNote(){
    this.output.emit('getAllNote');
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
      if (result.updateData) {
         this.output.emit({name:'getAllNote'});
        this.service.updateNote(result.updateData).subscribe(response => {
          console.log(response);
        });
        console.log(result.updateData);
      }
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

