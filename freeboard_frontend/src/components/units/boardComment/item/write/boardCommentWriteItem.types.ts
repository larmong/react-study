import { ChangeEvent } from "react";

export interface IBoardCommentWriteItem {
  isEdit: boolean;
  commentLength: string;
  commentRating: number;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickComment?: () => void;
  onClickIsEdit?: () => void;
  onChangeRating: (value: number) => void;
}

export interface IIsActive {
  isActive?: boolean;
}

export interface IBoardCommentWriteItemUI {
  isEdit: boolean;
  commentLength: string;
  commentRating: number;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickComment?: () => void;
  onClickIsEdit?: () => void;
  onChangeRating: (value: number) => void;
}
