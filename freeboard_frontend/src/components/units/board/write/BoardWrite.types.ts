import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";
import { CustomMouseEvent } from "../list/BoardList.types";

export interface IPropsBoardWrite {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IEditVariables {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IPropsBoardWriteUI {
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
  modalToggle: (event: CustomMouseEvent) => void;
  onClickSubmit: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
