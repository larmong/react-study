import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/style/global.style";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
