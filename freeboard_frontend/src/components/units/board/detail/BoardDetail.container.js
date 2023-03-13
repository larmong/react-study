import {useRouter} from "next/router";
import {useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {CREATE_BOARD_COMMENT, DELETE_BOARD, FETCH_BOARD, FETCH_BOARD_COMMENTS} from "./BoardDetail.queries";
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


  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)


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
        console.log(result)
        alert("댓글이 등록되었습니다! 🤩");
      } catch (error) {
        console.log(error)
      }
    }
  }


  return (
    <BoardDetailUI
      locationInfo={locationInfo}
      fetchBoard={fetchBoard}
      onClickLocation={onClickLocation}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
      fetchBoardComments={fetchBoardComments}
      commentLength={commentLength}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickCreateComment={onClickCreateComment}
    />
  )
}
