import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IPropsBoardListUI {
  fetchBoards?: Pick<IQuery, "fetchBoards">;
  fetchBoardsOfTheBest?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLElement>) => void;
  startPage: number;
  lastPage: number;
  nowPage: number;
  onClickPageNation: (event: MouseEvent<HTMLElement>) => void;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
}
