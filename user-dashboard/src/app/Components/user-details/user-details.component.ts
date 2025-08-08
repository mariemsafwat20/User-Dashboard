import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { selectError, selectLoading, selectSelectedUser } from '../../Store/users/user.selectors';
import { Store } from '@ngrx/store';
import { loadUser } from '../../Store/users/user.actions';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    MatToolbarModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  user$ = this.store.select(selectSelectedUser);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private route:ActivatedRoute, private router: Router, private store: Store) { }

  ngOnInit(){
    this.getUser();
  }

  // UserDetail
  getUser() {
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {
      const userId = Number(id);
      this.store.dispatch(loadUser({ id: userId }));
    }
  }
  
  userFields$: Observable<{ label: string; value: any }[]> = this.user$.pipe(
    map(user => {
      if (!user) return [];
  
      // Keys to show
      const keysToShow = [
        'birthDate',
        'age',
        'email',
        'phone',
        'gender',
        'address'
      ];
  
      const fields = [];

      // Add Id first
      if (user.hasOwnProperty('id')) {
        fields.push({ label: 'Id', value: user.id });
      }

      // Add combined Full Name field
      if (user.firstName || user.lastName || user.maidenName) {
        const fullName = [user.firstName, user.lastName, user.maidenName]
          .filter(Boolean)  // removes undefined/null/empty strings
          .join(' ');
        fields.push({ label: 'Full Name', value: fullName });
      }
  
      // Add the rest fields
      keysToShow.forEach(key => {
        if (user.hasOwnProperty(key)) {
          let value = user[key];

          // If the key is address and it's an object
          if (key === 'address' && typeof value === 'object' && value !== null) {
            value = Object.values(value).join(', ');
          }
          fields.push({ label: key, value });
        }
      });
  
      return fields;
    })
  );
    

  // BackToHome
  goBack(){
    this.router.navigate(['/']);
  }
}
