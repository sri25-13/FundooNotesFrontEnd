import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor(private http : HttpClient) { }

addCollaborator(col)
  {
    return this.http.post(environment.Url+'api/addColloborator',col);
  }
   deleteCollaborator(del)
   {
     return this.http.put(environment.Url+'api/deleteCollaborator?id='+del,null);
   }
  }