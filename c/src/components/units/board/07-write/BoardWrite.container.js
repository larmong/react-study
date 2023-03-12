import {useState} from "react";
import {useRouter} from "next/router";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "@/src/components/units/board/07-write/BoardWrite.presenter";
import {CREATE_BOARD, UPDATE_BOARD} from "@/src/components/units/board/07-write/BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();
  // 자바스크립트 영역
  const [myColor, setMyColor] = useState(false)

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {  // variables 이게 $ 역할을 해줌
        writer: writer,
        title: title,
        contents: contents
      }
    })
    console.log(result)
    alert(result.data.createBoard.message)
    router.push(`/07-05-boards/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async () => {
    // 1. 수정하기 mutation 날리기
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer,
        title,
        contents
      }
    })

    // 2. 수정하고 상세페이지로 돌아가기(router push)
    console.log(result)
    alert(result.data.updateBoard.message)
    router.push(`/07-05-boards/${result.data.updateBoard.number}`)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if(event.target.value && title && contents ) {
      setMyColor(true)
    }
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if(writer && event.target.value && contents ) {
      setMyColor(true)
    }
  }
  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(writer && title && event.target.value ) {
      setMyColor(true)
    }
  }


  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      myColor={myColor}
      isEdit={props.isEdit}
    />
  )
}
