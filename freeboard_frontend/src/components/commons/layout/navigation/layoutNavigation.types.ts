import { MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface ILayoutNavigationUI {
  nowRoute: string;
  onClickMoveToMenus: (event: CustomMouseEvent) => void;
}
