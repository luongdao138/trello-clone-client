import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth, User } from './authModel';

const initialState: Auth = {
  user: {} as User,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggin_success: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    logout: (state) => {
      localStorage.removeItem('trello_token');
      // window.location.href = 'http://localhost:3000/login';
      window.location.href =
        'https://wizardly-nightingale-2253f3.netlify.app/login';
    },
  },
  extraReducers: {},
});

export const { loggin_success, logout } = authSlice.actions;
export default authSlice.reducer;
