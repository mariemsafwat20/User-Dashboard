import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { UserServiceService } from '../../Services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUsers } from '../../Store/users/user.actions';
import { selectAllUsers, selectLoading } from '../../Store/users/user.selectors';

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
  // users: any[] = [];

  users$ = this.store.select(selectAllUsers);
  loading$ = this.store.select(selectLoading);
  
  skip = 3;
  limit = 6;

  constructor(private router: Router, private store: Store) { }

  ngOnInit(){
    this.fetchUsers();    
  }

  fetchUsers() {
    this.store.dispatch(loadUsers({ limit: this.limit, skip: this.skip}));
  }

  userDetails(id:number){
    this.router.navigate(['/userDetail', id]);
  }


}
