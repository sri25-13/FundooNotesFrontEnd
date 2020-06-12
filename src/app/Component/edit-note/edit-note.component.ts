import { Component, OnInit,Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Note } from 'src/app/Model/notes.model';
@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  @Output() output: EventEmitter<any> = new EventEmitter();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<EditNoteComponent>) { }
  note: Note = new Note();
  form={
    title:'',
    description:'',
    reminder:'',
    archeive:false,
    changeColor:'',
 };
 backgroundColor:'rgb(255,255,255)'
  ngOnInit(): void {
  }
  updateNote(title, description, noteId,changeColor) {
    this.note.noteId = noteId;
    this.note.description = description;
    this.note.title = title;
    this.note.changeColor=changeColor;
    //this.dialogRef.beforeClose({updateData:this.note});
    this.dialogRef.close({ updateData: this.note });
  }
}