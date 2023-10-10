export interface IUser {
  id?: string;
  username: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  accounts?: string[];
  sessions?: string[];
  orders?: string[];
}

export interface IUserInfo {
  userInformation: IUser | null;
}

// RootState interface => used for state interface in useSelector hook

export interface IUserInfoRootState {
  userInfo: IUserInfo;
}
