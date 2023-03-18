import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardCommentListUI from "./boardCommentList.presenter";
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
    <BoardCommentListUI
      fetchBoardComments={fetchBoardComments}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
}
