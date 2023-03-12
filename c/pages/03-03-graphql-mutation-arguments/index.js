import {gql, useMutation} from "@apollo/client";


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
  const [MyFunction] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {  // variables 이게 $ 역할을 해줌
        writer: "훈이",
        title: "안녕하세요~",
        contents: "반갑습니다!"
      }
    })
    alert(result.data.createBoard.message)
    console.log(result)
  }

  return(
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  )
}
