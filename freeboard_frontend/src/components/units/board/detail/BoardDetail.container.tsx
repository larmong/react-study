import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { CustomMouseEvent } from "./BoardDetail.types";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardArgs,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD,
  FETCH_BOARD_COMMENTS,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [locationInfo, setLocationInfo] = useState<boolean>(false);
  const [commentLength, setCommentLength] = useState<string>("0");
  const [commentWriter, setCommentWriter] = useState<string>("");
  const [commentPassword, setCommentPassword] = useState<string>("");
  const [commentContents, setCommentContents] = useState<string>("");
  const [commentRating, setCommentRating] = useState<number>(4);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const { data: fetchBoard } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query._id) },
  });
  const { data: fetchBoardComments } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
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

  const onClickLocation = () => {
    setLocationInfo(!locationInfo);
  };

  const onChangeCommentContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContents(event.target.value);
    setCommentLength(String(commentContents.length));
  };
  const onChangeCommentWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentWriter(event.target.value);
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

  const onClickDeleteComment = async (event: CustomMouseEvent) => {
    const userPassword = prompt("비밀번호를 입력해주세요 🤨");
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
    <BoardDetailUI
      fetchBoard={fetchBoard}
      fetchBoardComments={fetchBoardComments}
      locationInfo={locationInfo}
      onClickLocation={onClickLocation}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
      commentLength={commentLength}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickCreateComment={onClickCreateComment}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
}
