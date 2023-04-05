import { gql } from "@apollo/client";

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
