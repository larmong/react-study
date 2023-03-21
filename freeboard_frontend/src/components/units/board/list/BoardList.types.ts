import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import { ApolloQueryResult } from "@apollo/client";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IPropsBoardListUI {
  fetchBoards?: Pick<IQuery, "fetchBoards">;
  fetchBoardsOfTheBest?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: (event: MouseEvent<HTMLElement>) => void;
  totalPage?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}
