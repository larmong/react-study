import {useState} from "react";
import {useRouter} from "next/router";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "@/src/components/units/board/08-write/BoardWrite.presenter";
import {CREATE_BOARD, UPDATE_BOARD} from "@/src/components/units/board/08-write/BoardWrite.queries";


// 수정하기
// 1. 디폴트 값 보여주기
// 2. 변경 된 값만 보내기

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
    router.push(`/08-01-boards/${result.data.createBoard.number}`)
  }


  // variables 등록할 때, 입력하지 않은 값을 삭제하기 어렵기 때문에
  // 수정한 값만 variables 변수를 따로 만들어서 추가해주는 식으로해주고
  // 그 변수를 다시 variables 값에 넣어 변경된 값만 전송해준다.
  const onClickUpdate = async () => {
    const myVariables = {
      number: Number(router.query.number)
    };
    if(writer) myVariables.writer = writer;
    if(title) myVariables.title = title;
    if(contents) myVariables.contents = contents;

    // 1. 수정하기 mutation 날리기
    const result = await updateBoard({
      variables: myVariables
    })

    // const result = await updateBoard({
    //   variables: {
    //     number: Number(router.query.number),
    //     writer,
    //     title,
    //     contents
    //   }
    // })



    // 2. 수정하고 상세페이지로 돌아가기(router push)
    console.log(result)
    alert(result.data.updateBoard.message)
    router.push(`/08-01-boards/${result.data.updateBoard.number}`)
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
      data={props.data}
    />
  )
}
