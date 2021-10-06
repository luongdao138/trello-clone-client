import { Item } from '../../shared/MemberSelector';

export interface Comment {
  _id: string;
  content: string;
  creator: Item;
  createdAt: Date;
}

export interface SliceState {
  loading: boolean;
  error: string | null;
  comments: Comment[];
}
