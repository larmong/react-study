import {gql, useMutation} from "@apollo/client";
import {useState} from "react";


// mutation >> 이후 타입을 적어주어야 함 "createBoard($writer: String, $title: String, $contents: String)"
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard (writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`
export default function GraphqlMutationPage() {
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
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  const onChangeContents = (event) => {
    setContents(event.target.value);
  }

  return(
    <>
      작성자: <input type="text" onChange={onChangeWriter} /><br />
      제목: <input type="text" onChange={onChangeTitle} /><br />
      내용: <input type="text" onChange={onChangeContents} /><br />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  )
}
