import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IPropsBoardListUI {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  fetchBoards?: Pick<IQuery, "fetchBoards">;
  fetchBoardsOfTheBest?: Pick<IQuery, "fetchBoardsOfTheBest">;
  // onClickMoveToNew: () => void;
  // onClickMoveToDetail: (event: MouseEvent<HTMLElement>) => void;
  onClickMoveToPage: () => void;
  totalPage: number | undefined;
  refetchBoardsCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}
