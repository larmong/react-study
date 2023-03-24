import { CustomMouseEvent } from "../../list/boardCommentList.types";
import { ChangeEvent } from "react";

export interface IBoardCommentItem {
  el: any;
  modalToggle: (event: CustomMouseEvent) => void;
}

export interface IBoardCommentItemUI {
  isEdit: boolean;
  el: any;
  onClickIsEdit: () => void;
  modalToggle?: (event: CustomMouseEvent) => void;
  commentLength: string;
  commentRating: number;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (value: number) => void;
  onClickCommentEdit: () => void;
}
