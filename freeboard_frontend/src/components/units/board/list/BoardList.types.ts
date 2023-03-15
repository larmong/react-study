import {IQuery} from "../../../../commons/types/generated/types";
import {ChangeEvent} from "react";

export interface IPropsBoardListUI {
    fetchBoards?: Pick<IQuery, "fetchBoards">
    fetchBoardsOfTheBest?: Pick<IQuery, "fetchBoardsOfTheBest">
    onClickMoveToNew: () => void
    onClickMoveToDetail: any // (event: MouseEventHandler<HTMLImageElement>) => void
}
