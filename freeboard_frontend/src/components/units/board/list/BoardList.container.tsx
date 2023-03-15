import {useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import BoardListUI from "./BoardList.presenter";
import {FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST} from "./BoardList.queries";
import {IQuery} from "../../../../commons/types/generated/types";
import {CustomMouseEvent} from "./BoardList.types";

export default function BoardList() {
  const router = useRouter();
  const { data : fetchBoards } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS)
  const { data : fetchBoardsOfTheBest } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BOARDS_OF_THE_BEST)

  const onClickMoveToNew = () => {
    router.push(`/boards/new`)
  }

  const onClickMoveToDetail = (event: CustomMouseEvent) => {
    router.push(`/boards/${(event.currentTarget as Element).id}`)
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
