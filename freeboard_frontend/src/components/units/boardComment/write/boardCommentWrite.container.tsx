import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import BoardCommentWriteUI from "./boardCommentWrite.presenter";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./boardCommentWrite.queries";

export default function BoardCommentWrite() {
  const router = useRouter();

  const [commentLength, setCommentLength] = useState<string>("0");
  const [commentWriter, setCommentWriter] = useState<string>("");
  const [commentPassword, setCommentPassword] = useState<string>("");
  const [commentContents, setCommentContents] = useState<string>("");
  const [commentRating, setCommentRating] = useState<number>(4);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const onChangeCommentWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentWriter(event.target.value);
  };
  const onChangeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
    setCommentLength(String(commentContents.length));
  };
  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };

  const onClickCreateComment = async () => {
    if (commentWriter && commentPassword && commentContents) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: commentWriter,
              password: commentPassword,
              contents: commentContents,
              rating: commentRating,
            },
            boardId: String(router.query._id),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: String(router.query._id) },
            },
          ],
        });
        alert("댓글이 등록되었습니다! 🤩");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <BoardCommentWriteUI
      commentLength={commentLength}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickCreateComment={onClickCreateComment}
    />
  );
}
