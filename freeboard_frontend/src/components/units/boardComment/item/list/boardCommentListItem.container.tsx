import { IBoardCommentItem } from "./boardCommentListItem.types";
import BoardCommentItemUI from "./boardCommentListItem.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_BOARD_COMMENT } from "./boardCommentListItem.queries";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";

export default function BoardCommentItem(props: IBoardCommentItem) {
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const [commentLength, setCommentLength] = useState<string>("0");
  const [commentPassword, setCommentPassword] = useState<string>("");
  const [commentContents, setCommentContents] = useState<string>("");
  const [commentRating, setCommentRating] = useState<number>(0);

  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEdit = () => {
    setIsEdit((prev: boolean) => !prev);
  };

  const onChangeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
    setCommentLength(String(commentContents.length));
  };
  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };
  const onChangeRating = (value: number) => {
    setCommentRating(value);
  };
  const onClickCommentEdit = () => {
    // const commentEdit = {};
    // if (contents) commentEdit.contents;
    // if (rating) commentEdit.rating;
    //   const result = updateBoardComment({
    //     variables: {
    //       updateBoardCommentInput: commentEdit,
    //       password: password,
    //       boardCommentId: String(event.currentTarget.id),
    //     },
    //   });
    onClickIsEdit();
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
