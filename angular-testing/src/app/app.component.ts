import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Welcome to angular-testing!';
  users;

  constructor(private userService:UserService){this.userService = userService;}

  ngOnInit(){
    this.userService.getAllUsers()
    .subscribe(response=>{
      this.users = response.body;
    })
    
  }
}
