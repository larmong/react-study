import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IIsActive {
  isActive?: boolean;
}

export interface IPagination01Props {
  totalPage?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface Pagination01UIProps {
  startPage: number;
  lastPage: number;
  nowPage: number;
  onClickPagination: (event: MouseEvent<HTMLElement>) => void;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
}
