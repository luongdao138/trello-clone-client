export interface User {
  _id: string;
  email: string;
  username: string;
  avatar?: string;
  bio?: string;
  phone?: string;
}

export interface Auth {
  user: User;
}
