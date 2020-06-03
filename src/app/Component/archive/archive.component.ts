import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveList:any=[];
  constructor(private service:NoteservicesService) { }
getAllArchive()
{
this.service.getArchive().subscribe(
      response=>{
      this.archiveList=response;
      console.log(response);
      });
  }
  ngOnInit() {
    this.getAllArchive();
  }
}

