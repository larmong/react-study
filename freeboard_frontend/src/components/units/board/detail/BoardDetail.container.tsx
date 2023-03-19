import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const { data: fetchBoard } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query._id) },
  });

  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query._id}/edit`);
  };

  const onClickDelete = async () => {
    alert("게시글이 삭제되었습니다! 😶‍🌫");
    await deleteBoard({
      variables: { boardId: String(router.query._id) },
    });
    router.push(`/boards`);
  };

  const onClickMoveToList = () => {
    router.push(`/boards`);
  };

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const onMouseOverLocation = () => {
    setIsHovering((prev) => !prev);
  };

  return (
    <BoardDetailUI
      fetchBoard={fetchBoard}
      isHovering={isHovering}
      onMouseOverLocation={onMouseOverLocation}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
    />
  );
}
