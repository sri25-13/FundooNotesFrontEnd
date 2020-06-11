import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${localStorage.securityToken}`)
  }
  constructor(private http : HttpClient) { }
  createnote(values)
  {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.securityToken}`)
    }
    return this.http.post(environment.Url+'AddNote',values,header);
  }
  getAllNotes()
  {
    return this.http.get(environment.Url + 'getallnotes',this.header);
  }
  archeive(id)
  {
    return this.http.put(environment.Url + 'IsArchive?id='+id,null,this.header );
  }
  
  setcolor(id,color)
  {
        return this.http.put(environment.Url + 'ChangeColor?id='+id+'&color='+color,null,this.header);
  }
  sendToTrash(id)
  {
    return this.http.post(environment.Url + 'Trash?id='+id,null,this.header);
  }
  updateNote(val)
  {
    console.log(val);
    debugger;
    return this.http.put(environment.Url +'Update',val,this.header);
  }
  getTrash()
  {
    return this.http.get(environment.Url+'trashlist',this.header);
  }
  getArchive()
  {
    return this.http.get(environment.Url +'GetArchive',this.header);
  }
  setReminder(id,reminder)
    {
      debugger;
      return this.http.post(environment.Url+'reminder?id='+id+'&Reminder='+reminder,null,this.header);
    }
    getReminder()
  {
    return this.http.get(environment.Url +'GetReminder',this.header);
  }
removeReminder(id)
{
  debugger;
  return this.http.delete(environment.Url +'deleteReminder?id='+id,this.header);
}
search(values)
{
  debugger
  return this.http.get(environment.Url+'search?searchParameter='+values,this.header);
}
}    
