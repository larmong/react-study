import {useRouter} from "next/router";
import {useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD,
  FETCH_BOARD_COMMENTS
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter()
  const [locationInfo, setLocationInfo] = useState(false);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [commentLength, setCommentLength] = useState("0");

  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentRating, setCommentRating] = useState(4);

  // console.log(router)

  const { data : fetchBoard } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id }
  })
  const { data : fetchBoardComments } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query._id }
  })
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)


  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query._id}/edit`)
  }

  const onClickDelete = async () => {
    alert("게시글이 삭제되었습니다! 😶‍🌫");
    await deleteBoard({
      variables: { boardId: router.query._id }
    })
    router.push(`/boards`)
  }

  const onClickMoveToList = () => {
    router.push(`/boards`)
  }

  const onClickLocation = () => {
    setLocationInfo(!locationInfo)
  }

  const onChangeCommentContents = (event) => {
    setCommentLength(event.target.value.length)
    setCommentContents(event.target.value)
  }
  const onChangeCommentWriter = (event) => {
    setCommentWriter(event.target.value)
  }
  const onChangeCommentPassword = (event) => {
    setCommentPassword(event.target.value)
  }


  const onClickCreateComment = async () => {
    if(commentWriter && commentPassword && commentContents){
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: commentWriter,
              password: commentPassword,
              contents: commentContents,
              rating: commentRating
            },
            boardId: router.query._id
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query._id }
            }
          ]
        })
        alert("댓글이 등록되었습니다! 🤩");
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onClickDeleteComment = async (event) => {
    const userPassword = prompt("비밀번호를 입력해주세요 🤨");

    try {
      await deleteBoardComment({
        variables: {
          password: String(userPassword),
          boardCommentId: event.target.id
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id }
          }
        ]
      })
      alert("댓글이 삭제되었습니다! 😶‍🌫");
    } catch (error) {
      console.log(error)
    }
  }


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
  )
}
