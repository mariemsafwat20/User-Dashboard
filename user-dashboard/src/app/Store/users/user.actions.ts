import { createAction, props } from "@ngrx/store";
import { User } from "./models/user.model";
import { error } from "console";

// UsersList
export const loadUsers = createAction(
    '[User List] Load Users', 
    props<{ limit: number, skip: number }>()
);

export const loadUsersSuccess = createAction(
    '[User List] Load Success', 
    props<{ users: User[]; totalUsers: number }>()
);

export const loadUsersFailure = createAction(
    '[User List] Load Failure', 
    props<{ error: any }>()
);

// UserDetail
export const loadUser = createAction('[User Detail] Load User', props<{ id: number }>());
export const loadUserSuccess = createAction('[User Detail] Load Success', props<{ user: User }>());
export const loadUserFailure = createAction('[User Detail] Load Failure', props<{ error: any }>());

// searchUser
export const searchUser = createAction(
    '[Users] Search Users',
    props<{ searchValue: string }>() 
);

export const searchUserSuccess = createAction(
    '[Users] Search User Success',
    props<{ user : User}>()
);

export const searchUserFailure = createAction(
    '[Users] Search User Failure',
    props<{ error: any }>()
);
