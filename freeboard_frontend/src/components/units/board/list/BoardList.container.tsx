import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { CustomMouseEvent } from "./BoardList.types";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { useState } from "react";

export default function BoardList() {
  const { data: fetchBoards, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: fetchBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  const { data: fetchBoardsOfTheBest } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);

  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const totalPage = Number(fetchBoardsCount?.fetchBoardsCount);
  const lastPage = Math.ceil(totalPage / 10);

  const onClickMoveToNew = () => {
    router.push(`/boards/new`);
  };
  const onClickMoveToDetail = (event: CustomMouseEvent) => {
    router.push(`/boards/${(event.currentTarget as Element).id}`);
  };

  const onClickPageNation = (event: CustomMouseEvent) => {
    void refetch({ page: Number(event.currentTarget.id) });
    setNowPage(Number(event.currentTarget.id));
  };

  // TODO: Prev, Next 버튼 눌렀을 때, target 안됨ㅠ
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev: number) => prev - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (lastPage >= startPage + 10) {
      setStartPage((prev: number) => prev + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <BoardListUI
      startPage={startPage}
      lastPage={lastPage}
      fetchBoards={fetchBoards}
      fetchBoardsOfTheBest={fetchBoardsOfTheBest}
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickPageNation={onClickPageNation}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      nowPage={nowPage}
    />
  );
}
