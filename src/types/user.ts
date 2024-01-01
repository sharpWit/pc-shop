export interface IUser {
  id: string;
  email?: string;
  phone?: string;
  created_at?: string;
  last_sign_in_at?: string;
  role?: string;
  updated_at?: string;
}

export interface IUserInfo {
  userInformation: IUser | null;
}

// RootState interface => used for state interface in useSelector hook

export interface IUserInfoRootState {
  userInfo: IUserInfo;
}
