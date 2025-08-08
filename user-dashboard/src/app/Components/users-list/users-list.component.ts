import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { loadUsers, searchUser } from '../../Store/users/user.actions';
import { selectAllUsers, selectLoading, selectTotalUsers } from '../../Store/users/user.selectors';

import { UnderlineDirective } from '../../Shared/directives/underline.directive';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule,
    CommonModule,
    UnderlineDirective
    ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent {

  loading$ = this.store.select(selectLoading);
  users$ = this.store.select(selectAllUsers);
  total$ = this.store.select(selectTotalUsers);

  totalUsers = 0;
  limit = 8;
  pageIndex = 0;           

  constructor(private router: Router, private store: Store) { }

  ngOnInit(){
    this.loadUserData();    
  }

  // UsersList
  loadUserData() {
    this.store.select(selectTotalUsers).subscribe(total => {
      this.totalUsers = total;
    })
    this.store.dispatch(loadUsers({ limit: this.limit, skip: this.pageIndex * this.limit }));
  }

  // UserDetail
  userDetails(id:number){
    this.router.navigate(['/userDetail', id]);
  }

  // Pagination
  onPageChange(event: PageEvent){
    this.limit = event.pageSize;

    // Get PageNum
    this.pageIndex = event.pageIndex;
    
    this.loadUserData();
  }

  // Search
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchValue = input.value;

    if (searchValue && !isNaN(Number(searchValue))) {
      this.store.dispatch(searchUser({ searchValue }));
    }
  }
  
}
