import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
 listhtml!:User[];

  constructor(private listserv:UserService) { }

  ngOnInit(): void {
   this.getuser()
    
    
  }
  getuser():void{
    this.listserv.listUser("https://jsonplaceholder.typicode.com/users").subscribe(users =>{
      this.listhtml=users;
    
      
    });

    
  }
}
