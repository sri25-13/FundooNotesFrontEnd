import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
  
})
export class UserService {

  constructor(private http : HttpClient,private https:HttpClient) { }

  registration(values)
  {
    return this.http.post(environment.Url+'register',values);
  }
  login(values)
  {
    return this.https.post(environment.Url + 'login',values);
  }
}
