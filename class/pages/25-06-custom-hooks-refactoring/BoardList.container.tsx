import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
// import { useState } from "react";
import BoardListUI from "./BoardList.presenter";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
// import { CustomMouseEvent } from "./BoardList.types";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { useMoveToPage } from "../../src/components/commons/hocs/useMoveToPage";
import { useSearch } from "../../src/components/commons/hocs/useSearch";

export default function BoardList() {
  const { onClickMoveToPage } = useMoveToPage();
  const { keyword, onChangeKeyword } = useSearch();

  // const router = useRouter();
  // const [keyword, setKeyword] = useState("");

  const { data: fetchBoards, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const { data: fetchBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  const { data: fetchBoardsOfTheBest } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);

  // const onClickMoveToNew = () => {
  //   router.push(`/boards/new`);
  // };
  // const onClickMoveToDetail = (event: CustomMouseEvent) => {
  //   router.push(`/boards/${(event.currentTarget as Element).id}`);
  // };

  // const onChangeKeyword = (value: string) => {
  //   setKeyword(value);
  // };

  return (
    <BoardListUI
      refetch={refetch}
      fetchBoards={fetchBoards}
      totalPage={fetchBoardsCount?.fetchBoardsCount}
      refetchBoardsCount={refetchBoardsCount}
      fetchBoardsOfTheBest={fetchBoardsOfTheBest}
      // onClickMoveToNew={onClickMoveToNew}
      // onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToPage={onClickMoveToPage}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
