import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
  
})
export class UserService {

  constructor(private http : HttpClient) { }

  registration(values)
  {
    return this.http.post(environment.Url+'register',values);
  }
   login(value)
   {
     debugger;
     return this.http.post(environment.Url + 'login',value);
   }
}
