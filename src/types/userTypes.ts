export interface IUser {
  name: string;
  email: string;
  role: string;
}

export interface IUserError {
  details?: string;
  message: string;
  timestamp?: string;
}