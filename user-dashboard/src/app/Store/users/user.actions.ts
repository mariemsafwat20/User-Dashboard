import { createAction, props } from "@ngrx/store";
import { User } from "./models/user.model";

export const loadUsers = createAction('[User List] Load Users', props<{ limit: number, skip: number }>());
export const loadUsersSuccess = createAction('[User List] Load Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User List] Load Failure', props<{ error: any }>());

export const loadUser = createAction('[User Detail] Load User', props<{ id: number }>());
export const loadUserSuccess = createAction('[User Detail] Load Success', props<{ user: User }>());
export const loadUserFailure = createAction('[User Detail] Load Failure', props<{ error: any }>());