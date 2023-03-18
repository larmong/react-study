import { ChangeEvent } from "react";

export interface IBoardCommentWriteUI {
  commentRating: number;
  commentLength: string;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (value: number) => void;
  onClickCreateComment: () => void;
}
