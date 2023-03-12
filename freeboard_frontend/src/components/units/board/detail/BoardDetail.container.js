import {useRouter} from "next/router";
import {useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_BOARD, FETCH_BOARD} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter()
  const [locationInfo, setLocationInfo] = useState(false);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id }
  });


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

  return (
    <BoardDetailUI
      locationInfo={locationInfo}
      data={data}
      onClickLocation={onClickLocation}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
    />
  )
}
