import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { UserServiceService } from '../../Services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    ],
  providers: [UserServiceService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users: any[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    return this.userService.getUsers(10, 0).subscribe((data: any) => {
      this.users = data.users;
      console.log("ss",data.users);
    })
  }

}
