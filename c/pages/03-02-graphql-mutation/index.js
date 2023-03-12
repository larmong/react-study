import {gql, useMutation} from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard (writer: "홍", title: "123", contents: "123123"){
      _id
      number
      message
    }
  }
`
export default function GraphqlMutationPage() {
  const [MyFunction] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await MyFunction()
    alert(result.data.createBoard.message)
    console.log(result)
  }

  return(
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  )
}
