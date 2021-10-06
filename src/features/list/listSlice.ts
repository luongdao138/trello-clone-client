import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { List, StateSlice, CardInList } from './listModel';
const initialState: StateSlice = {
  error: null,
  lists: [],
  loading: false,
};

type DropResult = {
  sourceListId: string;
  sourceListIndex: number;
  desListId: string;
  desListIndex: number;
  draggableCardId: string;
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    fetch_request: (state) => {
      state.loading = true;
    },
    fetch_success: (state, { payload }: PayloadAction<List[]>) => {
      state.loading = false;
      state.error = null;
      state.lists = payload;
    },
    fetch_fail: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
    add_success: (state, { payload }: PayloadAction<List>) => {
      state.lists.push(payload);
    },
    add_card_success: (
      state,
      { payload }: PayloadAction<{ listId: string; card: CardInList }>
    ) => {
      state.lists
        .find((x) => x._id === payload.listId)
        ?.cards.push(payload.card);
    },
    dragAndDrop: (state, { payload }: PayloadAction<DropResult>) => {
      const {
        desListId,
        sourceListId,
        sourceListIndex,
        desListIndex,
        draggableCardId,
      } = payload;
      const sourceList = state.lists.find((x) => x._id === sourceListId);
      const desList = state.lists.find((x) => x._id === desListId);
      const draggingCard = sourceList?.cards.find(
        (x) => x._id === draggableCardId
      );

      if (desList && sourceList && draggingCard) {
        sourceList.cards.splice(sourceListIndex, 1);
        desList.cards.splice(desListIndex, 0, draggingCard);
      }
    },
    update_success: (
      state,
      { payload }: PayloadAction<{ listId: string; list: List }>
    ) => {
      state.lists = state.lists.map((x) => {
        if (x._id === payload.listId) return payload.list;
        else return x;
      });
    },
    update_card: (
      state,
      { payload }: PayloadAction<{ cardId: string; card: any }>
    ) => {
      let list = state.lists.find((x) =>
        x.cards.some((c) => c._id === payload.cardId)
      );
      if (list) {
        let index = list.cards.findIndex((x) => x._id === payload.cardId);
        list.cards[index] = payload.card;
      }
    },
    add_card_comment: (
      state,
      { payload }: PayloadAction<{ cardId: string }>
    ) => {
      let list = state.lists.find((x) =>
        x.cards.some((c) => c._id === payload.cardId)
      );
      if (list) {
        let index = list.cards.findIndex((x) => x._id === payload.cardId);
        list.cards[index].comment_count++;
      }
    },
    delete_card_comment: (
      state,
      { payload }: PayloadAction<{ cardId: string }>
    ) => {
      let list = state.lists.find((x) =>
        x.cards.some((c) => c._id === payload.cardId)
      );
      if (list) {
        let index = list.cards.findIndex((x) => x._id === payload.cardId);
        list.cards[index].comment_count--;
      }
    },
  },
  extraReducers: {},
});

export const {
  fetch_fail,
  fetch_request,
  fetch_success,
  add_success,
  add_card_success,
  dragAndDrop,
  update_success,
  update_card,
  delete_card_comment,
  add_card_comment,
} = listSlice.actions;
export default listSlice.reducer;
