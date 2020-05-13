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
   Login(value)
   {
     return this.http.post(environment.Url + 'login',value);
   }
   Forgot(val)
   {
     return this.http.put(environment.Url + 'forget',val);
   }
   Reset(data)
   {
     debugger;
     return this.http.put(environment.Url +'reset',data)
   }
}
