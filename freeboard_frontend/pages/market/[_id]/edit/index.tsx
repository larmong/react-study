import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      seller {
        email
        name
      }
      createdAt
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

function MarketEdit() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query._id),
    },
  });
  return <MarketWrite isEdit={true} data={data} />;
}

export default withAuth(MarketEdit);
