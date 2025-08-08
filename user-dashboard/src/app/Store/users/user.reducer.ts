


import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUser, loadUserSuccess, loadUserFailure } from './user.actions';
import { initialState } from './user.state';


export const userReducer = createReducer(
    initialState,
    // UsersList
    on(loadUsers, state => ({ ...state, loading: true })),

    on(loadUsersSuccess, (state, { users , totalUsers }) => ({ 
        ...state, users, totalUsers ,loading: false 
    })),

    on(loadUsersFailure, (state, { error }) => ({ 
        ...state, error, loading: false 
    })),

    // UserDetail
    on(loadUser, state => ({ ...state, loading: true })),
    on(loadUserSuccess, (state, { user }) => ({ ...state, selectedUser: user, loading: false })),
    on(loadUserFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
