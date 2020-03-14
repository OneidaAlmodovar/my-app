import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  user: any;
  userEmmiter: EventEmitter<any> = new EventEmitter();
  isLoged: boolean;

  constructor(
    private httpClient:HttpClient
  ) { }

  login(username:string, password:string): Observable<any> {
    let credentials = {
      "email": username,
      "password": password
    }
    return new Observable( observer  =>  {
      this.httpClient.post(environment.api + "/login", credentials).subscribe((res)=>{
        this.httpClient.get(environment.api + "/users/2").subscribe((user)=>{
          this.user = user['data'];
          this.token = res['token'];
          this.isLoged = true;
          this.userEmmiter.emit(this.user);

          console.log(this.token);
          console.log(this.user);
          observer.next();
        })
      }, error =>{
        observer.error(error)
      });
    });
  }

  logout(){
    this.user = {};
    this.isLoged = false;
    this.userEmmiter.emit(this.user);
  }
}
