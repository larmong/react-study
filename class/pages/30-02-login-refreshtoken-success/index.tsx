import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  // const { data } = useQuery()               // 1. 페이지 접속하면 자동으로 data 에 받아지고, 리렌더링 됨
  // const [myQuery, {data}] = useLazyQuery()  // 2. 버튼 클릭시 직접 실행하면 data 에 받아지고, 리렌더링 됨
  // const client = useApolloClient()          // 3. axios 동일

  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return <button onClick={onClickButton}>클릭하세요!!</button>;
}
