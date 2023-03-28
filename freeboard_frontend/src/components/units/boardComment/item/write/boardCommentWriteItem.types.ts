import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardCommentWriteItem {
  data?: any;
  isEdit: boolean;
  commentLength: string;
  commentRating: number;
  commentPassword?: string;
  commentWriter?: string;
  commentContents?: string;
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
  data?: any;
  isEdit: boolean;
  commentLength: string;
  commentRating: number;
  commentPassword?: string;
  commentWriter?: string;
  commentContents?: string;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentWriter?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickComment?: () => void;
  onClickIsEdit?: () => void;
  onChangeRating: (value: number) => void;
}
