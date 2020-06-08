import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {

  constructor(private http : HttpClient) { }
  createnote(values)
  {
    return this.http.post(environment.Url+'AddNote',values);
  }
  getAllNotes()
  {
    return this.http.get(environment.Url + 'getallnotes');
  }
  archeive(id)
  {
    return this.http.put(environment.Url + 'IsArchive?id='+id,null );
  }
  getnote(value)
  {
    return this.http.get(environment.Url + 'getnote',value);
  }
  setcolor(id,color)
  {
        return this.http.put(environment.Url + 'ChangeColor?id='+id+'&color='+color,null);
  }
  sendToTrash(id)
  {
    return this.http.post(environment.Url + 'Trash?id='+id,null);
  }
  updateNote(val)
  {
    console.log(val);
    debugger;
    
    return this.http.put(environment.Url +'Update',val);
  }
  getTrash()
  {
    return this.http.get(environment.Url+'trashlist');
  }
  getArchive()
  {
    return this.http.get(environment.Url +'GetArchive');
  }
  setReminder(id,reminder)
    {
      debugger;
      return this.http.post(environment.Url+'reminder?id='+id+'&Reminder='+reminder,null);
    }
    getReminder()
  {
    return this.http.get(environment.Url +'GetReminder');
  }
removeReminder(id)
{
  debugger;
  return this.http.delete(environment.Url +'deleteReminder?id='+id);
}
search(values)
{
  debugger
  return this.http.get(environment.Url+'search?searchParameter='+values);
}
}    
