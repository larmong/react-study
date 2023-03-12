import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import {gql, useQuery} from "@apollo/client";
import {useRouter} from "next/router";


export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(
      boardId: $boardId
    ){
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
export default function BoardsEditPage() {
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query._id }
  });

  return (
    <BoardWrite isEdit={true} data={data} />
  )
}
