import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board, SliceState } from './boardModel';

const initialState: SliceState = {
  loading: false,
  boards: null,
  error: null,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    fetch_request: (state) => {
      state.loading = true;
    },
    fetch_success: (state, { payload }: PayloadAction<Board[]>) => {
      state.boards = payload;
      state.loading = false;
      state.error = null;
    },
    fetch_fail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
    add_success: (state, { payload }: PayloadAction<Board>) => {
      state.boards?.push(payload);
    },
    update_board: (
      state,
      { payload }: PayloadAction<{ board: Board; boardId: string }>
    ) => {
      state.boards = state.boards?.map((x) => {
        if (x._id === payload.boardId) return payload.board;
        else return x;
      }) as Board[];
    },
  },
  extraReducers: {},
});

export const {
  fetch_request,
  fetch_success,
  fetch_fail,
  add_success,
  update_board,
} = boardSlice.actions;
export default boardSlice.reducer;
