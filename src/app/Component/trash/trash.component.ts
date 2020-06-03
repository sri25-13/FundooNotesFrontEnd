import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashList:any=[];
  constructor(private service:NoteservicesService) { }
  getAllTrash()
  {
    this.service.getTrash().subscribe(
      response=>{
      this.trashList=response;
      console.log(response);
      });
  }
  ngOnInit() {
    this.getAllTrash();
  }
}