import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/Services/noteservices.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  reminderList:any=[];
  constructor(private service:NoteservicesService) { }
  getAllReminder()
  {
    this.service.getReminder().subscribe(
      response=>{
      this.reminderList=response;
      console.log(response);
      });
  }
  ngOnInit() {
    this.getAllReminder();
  }
}
