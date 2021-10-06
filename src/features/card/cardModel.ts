import { UserInList } from '../board/boardModel';
import { Label } from '../list/listModel';

export interface CardDetail {
  _id: string;
  title: string;
  labels: Label[];
  comment_count: number;
  attachment_count: number;
  cover_photo?: string;
  members: UserInList[];
  description: string;
  createdAt: Date;
}

export interface SliceState {
  loading: boolean;
  card: CardDetail;
  error: string | null;
}
