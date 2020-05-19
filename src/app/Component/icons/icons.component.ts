import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  archive = 0;
  constructor(private snackBar:MatSnackBar) { }

  ngOnInit() {
  }
  archeiveNote(){
    debugger;
  if (this.archive == 0) {
    this.archive = 1;
    this.snackBar.open('Note Archived', 'Dismiss', { duration: 2000 });
  }
  else {
    this.archive = 0;
    this.snackBar.open('Note UnArchived', 'Dismiss', { duration: 2000 });
  }
}
}