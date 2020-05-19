import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  listOfNotes: object;

  constructor(private service:NoteservicesService) { }
getAllNote(event?)
{
  this.service.getAllNotes().subscribe(
    response=>{
      this.listOfNotes=response;
      console.log(response);
    });
  
}
  ngOnInit() {
    this.getAllNote();
  }

}
