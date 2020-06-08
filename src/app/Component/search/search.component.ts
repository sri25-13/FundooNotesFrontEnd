import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  result:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.searchnote.subscribe(x=>this.result=x);
  }

}
