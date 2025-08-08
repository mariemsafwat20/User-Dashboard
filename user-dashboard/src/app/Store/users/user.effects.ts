// user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserServiceService } from '../../Services/user-service.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUser, loadUserSuccess, loadUserFailure, searchUser, searchUserSuccess } from './user.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserServiceService, private router: Router) {}

  // GetAllUsers
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(({ limit, skip }) =>
        this.userService.getUsers(limit, skip).pipe(
          map(response => loadUsersSuccess({ 
            users: response.users, 
            totalUsers: response.total,
          })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  // GetUser
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      mergeMap(({ id }) =>
        this.userService.getUserById(id).pipe(
          map(user => loadUserSuccess({ user })),
          catchError(error => of(loadUserFailure({ error })))
        )
      )
    )
  );

  // Search
  searchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchUser),
      mergeMap(({ searchValue }) => 
        this.userService.getUserById(+searchValue).pipe(
          map(user => loadUserSuccess({ user })),
          catchError(error => of(loadUserFailure({ error })))
        )
      )
    )
  );

  redirectAfterSearch$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadUserSuccess),
        tap(({ user }) => {
          this.router.navigate(['/userDetail', user.id]);
        })
      ),
    { dispatch: false }
  );
}
