import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUsedItem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUsedItem ($useditemId: ID!, $updateUseditemInput: !updateUseditemInput){
  updateUseditem (
        useditemId: $useditemId,
    updateUseditemInput: $updateUseditemInput
      ){
    _id
  }
}
`;
