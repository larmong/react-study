import BoardCommentItemUI from "./boardCommentListItem.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_BOARD_COMMENT } from "./boardCommentListItem.queries";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import {
  CustomMouseEvent,
  IBoardCommentItem,
  ICommentEdit,
} from "./boardCommentListItem.types";
import { FETCH_BOARD_COMMENTS } from "../../list/boardCommentList.queries";
import { useRouter } from "next/router";

export default function BoardCommentItem(props: IBoardCommentItem) {
  const router = useRouter();

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const [commentLength, setCommentLength] = useState<string>("0");
  const [commentPassword, setCommentPassword] = useState<string>("");
  const [commentContents, setCommentContents] = useState<string>("");
  const [commentRating, setCommentRating] = useState<number>(0);
  const [commentId, setCommentId] = useState<string>("");

  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEdit = (event: CustomMouseEvent) => {
    setIsEdit((prev: boolean) => !prev);
    setCommentId(String(event.currentTarget.id));
  };
  const onChangeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
    setCommentLength(String(commentContents.length));
  };
  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };
  const onChangeRating = async (value: number) => {
    await setCommentRating(value);
  };

  const onClickCommentEdit = async () => {
    const commentEdit: ICommentEdit = {};
    if (commentContents) commentEdit.contents = commentContents;
    if (commentRating) commentEdit.rating = commentRating;

    const result = await updateBoardComment({
      variables: {
        updateBoardCommentInput: commentEdit,
        password: commentPassword,
        boardCommentId: commentId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: String(router.query._id) },
        },
      ],
    });
    alert("댓글이 수정되었습니다! 🤩");
    setIsEdit((prev: boolean) => !prev);
  };

  return (
    <BoardCommentItemUI
      el={props.el}
      isEdit={isEdit}
      onClickIsEdit={onClickIsEdit}
      modalToggle={props.modalToggle}
      commentLength={commentLength}
      commentRating={commentRating}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeRating={onChangeRating}
      onClickCommentEdit={onClickCommentEdit}
    />
  );
}
