import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyExample() {
  const { data } = useQuery(FETCH_BOARDS);
  // const { data } = useQuery(FETCH_BOARDS, { fetchPolicy: "network-only" }); // ===> 무조건 다시 받아오는 옵션

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el}>{el.title}</div>
      ))}
    </>
  );
}
