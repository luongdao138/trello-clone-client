import { Comment, SliceState } from './commentModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: SliceState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    fetch_request: (state) => {
      state.loading = true;
    },
    fetch_success: (state, { payload }: PayloadAction<Comment[]>) => {
      state.loading = false;
      state.error = null;
      state.comments = payload;
    },
    fetch_fail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
    add_comment: (state, { payload }: PayloadAction<Comment>) => {
      state.comments.push(payload);
    },
    edit_comment: (
      state,
      { payload }: PayloadAction<{ commentId: string; comment: Comment }>
    ) => {
      state.comments = state.comments.map((x) => {
        if (x._id === payload.commentId) return payload.comment;
        else return x;
      });
    },
    delete_comment: (
      state,
      { payload }: PayloadAction<{ commentId: string }>
    ) => {
      state.comments = state.comments.filter(
        (x) => x._id !== payload.commentId
      );
    },
  },
  extraReducers: {},
});

export const {
  fetch_fail,
  fetch_request,
  fetch_success,
  edit_comment,
  add_comment,
  delete_comment,
} = commentsSlice.actions;
export default commentsSlice.reducer;
