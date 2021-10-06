import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import boardSlice from '../features/board/boardSlice';
import boardDetailSlice from '../features/boardDetail/boardDetailSlice';
import cardSlice from '../features/card/cardSlice';
import commentsSlice from '../features/comments/commentsSlice';
import counterReducer from '../features/counter/counterSlice';
import listSlice from '../features/list/listSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice,
    board: boardSlice,
    boardDetail: boardDetailSlice,
    list: listSlice,
    card: cardSlice,
    comments: commentsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
