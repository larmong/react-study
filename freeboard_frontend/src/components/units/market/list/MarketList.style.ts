import styled from "@emotion/styled";
import { ISearchState } from "./MarketList.types";

export const Wrapper = styled.div`
  width: 100%;
  margin: 80px auto;
`;
export const PageTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
`;

// -----------------------------------------

export const BestContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0 80px 0;
`;
export const BestItem = styled.div`
  width: 282px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
export const BestItemImg = styled.img`
  width: 242px;
  height: 242px;
`;

export const BestItemContents = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BestItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BestItemName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const BestItemRemarks = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #4f4f4f;
  margin: 4px 0 12px 0;
`;
export const BestItemPrice = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const BestPickIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BestIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const BestCount = styled.p`
  margin-top: 2px;
  line-height: 24px;
`;

// -----------------------------------------

export const SearchContainer = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ItemState = styled.div`
  display: flex;
`;

// prettier-ignore
export const State = styled.span`
  position: relative;
  text-align: center;
  width: 83px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin-right: 10px;
  letter-spacing: 0.5px;
  color: #000;
  //color: #4f4f4f;
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 83px;
    height: 2px;
    background: #ffd600;
  }
`

export const ItemSearch = styled.div`
  display: flex;
`;
export const SearchBar = styled.input`
  width: 282px;
  height: 100%;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  background: #f2f2f2;
`;
export const SearchDate = styled.input`
  width: 282px;
  height: 100%;
  padding: 14px 16px;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  margin: 0 24px;
`;
export const SearchBtn = styled.button`
  width: auto;
  height: 100%;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  padding: 14px 24px;
`;

// -----------------------------------------

export const Table = styled.div`
  width: 100%;
  height: 1000px;
  overflow-y: scroll;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  margin: 40px 0;
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffd600;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f2f2f2;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 20px 20px 20px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const ItemLeft = styled.div`
  display: flex;
  gap: 40px;
`;

export const ItemImg = styled.img`
  width: 160px;
  height: 160px;
`;
export const ItemInfo = styled.div``;
export const ItemName = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
export const ItemRemarks = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  padding: 4px 0 8px 0;
`;
export const ItemTags = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;
export const BottomGroup = styled.div`
  margin-top: 24px;
  display: flex;
`;
export const ItemProfile = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;
export const ItemSeller = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin-right: 20px;
`;
export const ItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;
export const ItemCount = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

// -----------------------------------------

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 52px;
`;
export const NewItemBtn = styled.button`
  height: 100%;
  border: 1px solid #000000;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
`;
