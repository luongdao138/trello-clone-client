export interface User {
  _id: string;
  email: string;
  username: string;
  avatar?: string;
  bio?: string;
}

export interface Auth {
  user: User;
}
