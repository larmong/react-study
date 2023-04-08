import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IBoardCommentListUI {
  fetchBoardComments?: Pick<IQuery, "fetchBoardComments">;
  modalToggle: (event: CustomMouseEvent) => void;
}
