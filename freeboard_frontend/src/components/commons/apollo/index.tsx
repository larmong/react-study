import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloProps) {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
