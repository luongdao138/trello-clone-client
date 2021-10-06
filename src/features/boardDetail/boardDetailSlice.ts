import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board } from './../board/boardModel';
import { StateSlice } from './boardDetailModel';
const initialState: StateSlice = {
  board: {} as Board,
  loading: false,
  error: null,
};

const boardDetailSlice = createSlice({
  name: 'board_detail',
  initialState,
  reducers: {
    fetch_request: (state) => {
      state.loading = true;
    },
    fetch_success: (state, { payload }: PayloadAction<Board>) => {
      state.loading = false;
      state.error = null;
      state.board = payload;
    },
    fetch_fail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
  },
  extraReducers: {},
});

export const { fetch_fail, fetch_request, fetch_success } =
  boardDetailSlice.actions;
export default boardDetailSlice.reducer;
