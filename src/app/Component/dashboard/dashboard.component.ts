import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

//   this.activatedRoute.queryParams.subscribe(params => {
//     let page = params['page'] || '';
//   });
// }
   notes() {
     debugger;
   this.route.navigate(['/notes']);
 }
}
