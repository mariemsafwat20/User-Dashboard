import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, USER_FEATURE_KEY } from './user.state';
import { state } from '@angular/animations';

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const selectAllUsers = createSelector(
    selectUserState, 
    state => state.users
);

export const selectTotalUsers = createSelector(
    selectUserState,
    state => state.totalUsers  
);

export const selectSelectedUser = createSelector(selectUserState, state => state.selectedUser);

export const selectLoading = createSelector(
    selectUserState, 
    state => state.loading
);

export const selectError = createSelector(selectUserState, state => state.error);
