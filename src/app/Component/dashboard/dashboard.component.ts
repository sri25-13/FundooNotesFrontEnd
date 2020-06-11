import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { NoteservicesService } from 'src/app/Services/noteservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  width: any;
  searchNotes: any;
  constructor(private route: Router, private service: NoteservicesService, private activatedRoute: ActivatedRoute, private data: DataService) { }
  view: boolean = true;
  grid = "row";
  ngOnInit() {
  }
  search(value) {
    this.data.updateSearchtext(value)
    this.service.search(value).subscribe(
      searchNotes => {
        this.searchNotes = searchNotes;
        this.data.searchnotes(this.searchNotes);
        console.log(this.searchNotes);
      });
  }
  gridView() {
    debugger;
    this.view = !this.view
    if (!this.view) {
      this.data.changegrid('50%');
      this.data.grid('400');
    }
    else {
      this.data.changegrid('21%');
      this.data.grid('200 ');
    }

  }
}


