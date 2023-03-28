import { ChangeEvent } from "react";

export interface IBoardCommentWriteUI {
  isEdit: boolean;
  commentLength: string;
  commentRating: number;
  commentPassword: string;
  commentWriter: string;
  commentContents: string;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateComment: () => void;
  onChangeRating: (value: number) => void;
}
