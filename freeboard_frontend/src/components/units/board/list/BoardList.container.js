import {useState} from "react";
import {useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import BoardListUI from "./BoardList.presenter";
import {FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST} from "./BoardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data : fetchBoards } = useQuery(FETCH_BOARDS)
  const { data : fetchBoardsOfTheBest } = useQuery(FETCH_BOARDS_OF_THE_BEST)

  const onClickMoveToNew = () => {
    router.push(`/boards/new`)
  }

  const onClickMoveToDetail = (event) => {
    router.push(`/boards/${event.target.id}`)
  }

  return (
    <BoardListUI
      fetchBoards={fetchBoards}
      fetchBoardsOfTheBest={fetchBoardsOfTheBest}
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  )
}
