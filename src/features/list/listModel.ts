import { UserInList } from '../board/boardModel';
export interface Label {
  name: string;
  color: string;
}

export interface CardInList {
  _id: string;
  title: string;
  labels: Label[];
  comment_count: number;
  attachment_count: number;
  cover_photo?: string;
  members: UserInList[];
}

export interface List {
  _id: string;
  title: string;
  board: string;
  cards: CardInList[];
}

export interface StateSlice {
  loading: boolean;
  error: string | null;
  lists: List[];
}
