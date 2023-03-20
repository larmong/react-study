import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IProps {
  children: JSX.Element;
}

// GraphQL setting
export default function ApolloSetting(props: IProps) {
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
