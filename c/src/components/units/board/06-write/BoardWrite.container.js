import {useState} from "react";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "@/src/components/units/board/06-write/BoardWrite.presenter";
import {CREATE_BOARD} from "@/src/components/units/board/06-write/BoardWrite.queries";

export default function BoardWrite() {
  // 자바스크립트 영역
  const [myColor, setMyColor] = useState(false)

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const [MyFunction] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {  // variables 이게 $ 역할을 해줌
        writer: writer,
        title: title,
        contents: contents
      }
    })
    alert(result.data.createBoard.message)
    console.log(result)
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
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      myColor={myColor}
    />
  )
}
