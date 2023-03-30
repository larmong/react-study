import { MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IFirebaseListUI {
  dataBoards: any;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLElement>) => void;
}
