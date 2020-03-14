import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';

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
  error:string;

  constructor(
    private authService: AuthService,
    private route:Router,
    private messageService:MessageService

  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.error = null;
    console.log("[LoginComponent] Login ", this.username);
    this.authService.login(this.username, this.password).subscribe(token =>{
      this.route.navigateByUrl("/home");
    }, error =>{
      this.error= error.error.error;
      this.messageService.add({
        severity:'error', 
        detail:error.error.error
      })
    })
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
