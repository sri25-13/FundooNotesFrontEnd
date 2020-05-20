import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteservicesService } from 'src/app/Services/noteservices.service';
import {   } from 'src/app/Component/displaynote/displaynote.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() input;
  constructor(private snackBar:MatSnackBar,private service:NoteservicesService,) { }
  ngOnInit() {
    this.input;
  }
    isArcheive()
    {
      this.service.archeive(event).subscribe(
        (result) => {
          this.snackBar.open('Archeived', 'Dismiss', { duration: 3000 });
        },
        (error) => {
          this.snackBar.open('unarcheive', '', { duration: 3000 });
      });
    }
  }