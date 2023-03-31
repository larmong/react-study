import { ChangeEvent } from "react";
import { CustomMouseEvent } from "../list/FirebaseList.types";

export interface IPropsFirebaseWrite {
  isEdit: boolean;
  fetchBoard?: any;
}

export interface IFirebaseEditVariables {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IPropsFirebaseBoardWriteUI {
  writer: string;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  addressError: string;
  zipcode: string;
  address: string;
  addressDetail: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  modalToggle: (event: CustomMouseEvent) => void;
  onClickSubmit: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
  isEdit: boolean;
  fetchBoard?: any;
}
