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
}    
