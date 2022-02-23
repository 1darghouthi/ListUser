import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

import { animationFrameScheduler, Observable } from 'rxjs';
import { User } from '../Models/user';

const httpOptions={
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
   list!:User[];
   
  constructor(private http:HttpClient) { }
// listUser():User[]{
  
//   return this.list=[{nom_user:"anis", num_user:94402001,age_user:30, etat_civil:"celi"},
//   {nom_user:"mohamed", num_user:99985980,age_user:36, etat_civil:"libre"}]

// }
listUser(url:string):Observable<any>{
  return this.http.get(url,httpOptions);
}
  

}
