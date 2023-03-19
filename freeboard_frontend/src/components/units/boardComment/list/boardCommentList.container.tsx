import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListUI from "./boardCommentList.presenter";
import InputModalComponentUI from "../../../commons/inputModal/inputModal.presenter";
import { CustomMouseEvent } from "./boardCommentList.types";

import {
  IQuery,
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./boardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const { data: fetchBoardComments } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query._id) },
  });

  const modalContents = {
    modalTitle: "비밀번호를 입력해주세요 🤨",
    inputType: "password",
    inputPlaceholder: "비밀번호를 입력해주세요.",
  };
  const [isModal, setIsModal] = useState<boolean>(false);
  const [userPassword, setUserPassword] = useState<string>("");

  function onChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    setUserPassword(event.target.value);
  }

  const modalToggle = () => {
    setIsModal((prev: boolean) => !prev);
  };

  const modalCurrentTarget = (event: CustomMouseEvent) => {
    if (isModal && event.target === event.currentTarget) {
      modalToggle();
    }
  };

  const onClickDeleteComment = async (event: CustomMouseEvent) => {
    try {
      await deleteBoardComment({
        variables: {
          password: String(userPassword),
          boardCommentId: (event.currentTarget as Element).id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query._id) },
          },
        ],
      });
      alert("댓글이 삭제되었습니다! 😶‍🌫");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <BoardCommentListUI fetchBoardComments={fetchBoardComments} />
      <InputModalComponentUI
        isModal={isModal}
        modalCurrentTarget={modalCurrentTarget}
        modalToggle={modalToggle}
        modalTitle={modalContents.modalTitle}
        inputType={modalContents.inputType}
        inputPlaceholder={modalContents.inputPlaceholder}
        onChangeInputValue={onChangeInputValue}
        onClickModalConfirm={onClickDeleteComment}
      />
    </>
  );
}
