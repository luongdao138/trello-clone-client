export interface UserInList {
  _id: string;
  username: string;
  avatar?: string;
}

export interface Member {
  user: UserInList;
  role: string;
}

export interface Board {
  _id: string;
  title: string;
  cover_photo: string;
  visibility: string;
  members: Member[];
  description?: string;
  createdAt: Date;
  code: string;
}

export interface SliceState {
  loading: boolean;
  error: string | null;
  boards: Board[] | null;
}
