
import { User } from './models/user.model';

export const USER_FEATURE_KEY = 'users';

export interface UserState {
    users: User[];
    totalUsers: number;
    selectedUser: User | null;
    loading: boolean;
    error: any;
}

export const initialState: UserState = {
    users: [],
    totalUsers: 0,
    selectedUser: null,
    loading: false,
    error: null
};
