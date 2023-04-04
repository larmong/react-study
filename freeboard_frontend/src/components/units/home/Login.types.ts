import { ChangeEvent } from "react";

export interface IUserInfo {
  email: string;
  password: string;
}

export interface IPropsLoginPageUI {
  onChangeUserInfo: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
}
