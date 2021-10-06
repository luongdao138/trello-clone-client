import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardDetail, SliceState } from './cardModel';
const initialState: SliceState = {
  card: {} as CardDetail,
  loading: false,
  error: null,
};

const cardDetailSlice = createSlice({
  name: 'card_detail',
  initialState,
  reducers: {
    fetch_request: (state) => {
      state.loading = true;
    },
    fetch_success: (state, { payload }: PayloadAction<CardDetail>) => {
      state.loading = false;
      state.error = null;
      state.card = payload;
    },
    fetch_fail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
  },
  extraReducers: {},
});

export const { fetch_fail, fetch_request, fetch_success } =
  cardDetailSlice.actions;
export default cardDetailSlice.reducer;
