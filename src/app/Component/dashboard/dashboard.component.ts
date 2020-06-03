import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,private activatedRoute: ActivatedRoute) { }
  view: boolean = false;
  grid = "row";
  ngOnInit() {
  }
  gridView() {
    if (this.view == true) {
      this.view = false;
      this.grid = "row";
    }
    else {
      this.view = true;
      this.grid = "column";
    }
  }
}
