import { Component, OnInit,Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Collaborator } from 'src/app/Model/Collaborator.model';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  colla : Collaborator = new Collaborator();
  email= localStorage.getItem('Email');
  name=localStorage.getItem('FullName');
  @Input() notes: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<CollaboratorComponent>) { }

  ngOnInit() {
  }
  save(email, noteId) {
    debugger
    console.log(email,noteId);
    this.colla.noteId = noteId;
    if (email != null && noteId != null) {
      this.colla.senderEmail=localStorage.getItem('Email');
      this.colla.receiverEmail = email;
      this.dialogRef.close({ collaborateData: this.colla });
    }
    else if (email != null && noteId == null) {
      this.dialogRef.close({ email: email });
    }
    else
      console.log("error");
  }
  deleteCollaborator(id){
    debugger;
    this.colla.id=id
     this.dialogRef.close({ deleteCol: id});
  }
}