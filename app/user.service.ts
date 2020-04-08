import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8046';
  constructor(private http:HttpClient) { }

  addUser(name,email,password,role)
  {
    const body={
      'userName':name,
      'userEmail':email,
      'password':password,
      'role':role,
      
       }
 
       const header=new HttpHeaders({'content-type':'application/json'});
       const Option=({headers:header});
     
       return this.http.post(this.baseUrl+'/addUser',body,Option)
  }

  login(email,pass)
{
  const header=new HttpHeaders({'content-type':'application/json'});
       const Option=({headers:header});
  return this.http.post(this.baseUrl+"/login?email="+email+"&password="+pass,Option);
}
}
