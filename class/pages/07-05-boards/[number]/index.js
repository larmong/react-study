import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter()

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number)
    }
  })

// console.log(data)

  const onClickMoveToEdit = () => {
    router.push(`/07-05-boards/${router.query.number}/edit`)
  }

  return (
    <>
      <div>{router.query.number}번 게시글로 이동이 완료되었습니다 🥳</div><br />
      <div>작성자: {data ? data.fetchBoard.writer : "로딩중입니다..."}</div>
      <div>제목: {data && data.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
      <button onClick={onClickMoveToEdit}>수정하기</button>
    </>
  )
}
