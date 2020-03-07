import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:string;
  countries: Array<string> = ['Mexico', 'USA', 'Canada'];
  country: string;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log("Login ", this.username);
  }

  onKeyup(event){
    console.log(event.key);
    console.log(event.target.value);
  }

  onChange(event){
    console.log(event.type);
    console.log(event.target.value);
  }
}
