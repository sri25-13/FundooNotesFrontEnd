import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${localStorage.securityToken}`)
  }
  constructor(private http : HttpClient) { }

addCollaborator(col)
  {
    debugger
    return this.http.post(environment.Url+'api/addcollaborator',col,this.header);
  }
   deleteCollaborator(del)
   {
     return this.http.put(environment.Url+'api/deleteCollaborator?id='+del,null);
   }
  }