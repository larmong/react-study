import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import {useEffect} from "react";

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
   const result = localStorage.getItem("accessToken")
   if(result) setAccessToken(result)
 })


  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 페이지 전환(_app.tsx 리렌더)되어도 캐시 유지
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
