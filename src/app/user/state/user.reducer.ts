import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as UserActions from './user.actions';
import { User } from '../user';

export interface UserState {
  currentUser: User;
  maskUserName: boolean;
}

const initialState: UserState = {
  currentUser: null,
  maskUserName: false,
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.maskUserName, (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName,
    };
  })
);

// Selectors
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(
  getUserFeatureState,
  (user) => user.currentUser
);

export const getMaskUserName = createSelector(
  getUserFeatureState,
  (user) => user.maskUserName
);
