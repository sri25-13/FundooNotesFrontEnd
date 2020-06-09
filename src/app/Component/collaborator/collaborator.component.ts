import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Collaborator } from 'src/app/Model/Collaborator.model';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  colla :Collaborator=new Collaborator();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<CollaboratorComponent>) { }

  ngOnInit() {
  }
  updateNote(noteId,senderEmail,receiverEmail) {
    this.colla.noteId = noteId;
    this.colla.senderEmail = senderEmail;
    this.colla.receiverEmail = receiverEmail;
    this.dialogRef.close({ updateData: this.colla });
  }

}
