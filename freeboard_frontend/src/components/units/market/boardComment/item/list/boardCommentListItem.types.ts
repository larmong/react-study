import { ChangeEvent, MouseEvent } from "react";
export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IBoardCommentItem {
  el: any;
  modalToggle: (event: CustomMouseEvent) => void;
}

export interface IBoardCommentItemUI {
  isEdit: boolean;
  el: any;
  onClickIsEdit: (event: CustomMouseEvent) => void;
  modalToggle?: (event: CustomMouseEvent) => void;
  commentLength: string;
  commentRating: number;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (value: number) => void;
  onClickCommentEdit: () => void;
}

export interface ICommentEdit {
  contents?: string;
  rating?: number;
}
