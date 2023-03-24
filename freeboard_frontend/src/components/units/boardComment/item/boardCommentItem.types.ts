import { CustomMouseEvent } from "../list/boardCommentList.types";

export interface IBoardCommentItem {
  el: any;
  modalToggle: (event: CustomMouseEvent) => void;
}

export interface IBoardCommentItemUI {
  el: any;
  modalToggle: (event: CustomMouseEvent) => void;
}
