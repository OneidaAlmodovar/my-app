import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  isLoged: boolean;
  user: any;

  ngOnInit(): void {
    this.authService.userEmmiter.subscribe( user =>{
      this.user = user;
      this.isLoged = this.authService.isLoged;
      console.log("User Menu ", this.user);
    })
  }

  onLogout(){
    this.authService.logout();
  }

}
