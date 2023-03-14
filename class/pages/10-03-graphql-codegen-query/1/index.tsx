import { gql, useQuery } from "@apollo/client";
import {IQuery, IQueryFetchBoardArgs} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard ($number: Int) {
    fetchBoard (number: $number){
      writer
      title
      contents
    }
  } 
`

export default function StaticRoutedPage() {
  const {data} = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      number: 265000
    }
  })

  return (
    <>
      <div>1번 게시글로 이동이 완료되었습니다 🥳</div><br />
      <div>작성자: {data ? data.fetchBoard?.writer : "로딩중입니다..."}</div>
      <div>제목: {data && data.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  )
}
