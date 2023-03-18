import { ChangeEvent } from "react";

export interface IBoardCommentWriteUI {
  commentLength: string;
  onChangeCommentContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateComment: () => void;
}
