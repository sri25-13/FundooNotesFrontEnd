import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
@Input() result:any;
  constructor(private service:NoteservicesService) { }
  ngOnInit(){ 
  }
  getID(data)
  {
    debugger;
this.service.getnote(data);
  }
}
