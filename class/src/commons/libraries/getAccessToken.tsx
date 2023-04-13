import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  try {
    const graphqlClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );
    const result: any = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken: any = result.restoreAccessToken.accessToken;

    return newAccessToken;
  } catch (error) {
    console.log(error);
  }
};

// https://backend-practice.codebootcamp.co.kr/graphql
