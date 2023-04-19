import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
  fromPromise,
  gql,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache(); // 함수 밖에서 설정

interface IProps {
  children: JSX.Element;
}

// GraphQL setting
export default function ApolloSetting(props: IProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리렌더링 예제 - process.browser 방법
  // if(process.browser) {
  //   console.log("지금은 브라우저다!!!")
  // } else {
  //   console.log("지금은 프론트엔드 서버다!!!")
  // }

  // 2. 프리렌더링 예제 - typeof window 방법
  // if(typeof window === "undefined") {
  //   console.log("지금은 브라우저다!!!")
  // } else {
  //   console.log("지금은 프론트엔드 서버다!!!")
  // }

  // 3. 프리렌더링 무시 - useEffect 방법
  useEffect(() => {
    // 1. 기존방식(refreshToken 이전)
    // const result = localStorage.getItem("accessToken");
    // if (result) setAccessToken(result);

    // 2. 새로운 방식(refreshToken)
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
      restoreAccessToken {
        accessToken
      }
    }
  `;

  // 리프레시 토큰 만료 에러 캐치 & 발급
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      console.log(graphQLErrors);
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 accessToken 저장하기
              setAccessToken(newAccessToken);

              // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`, // accessToken만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2. 변경된 operation 재요청하기!!!
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 페이지 전환(_app.tsx 리렌더)되어도 캐시 유지
    connectToDevTools: true,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
