import styled from "@emotion/styled";

export const BestBoardCard = styled.div`
  width: 282px;
  height: 257px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 284px;
    height: 120px;
  }
`;
export const BestBoardCardContents = styled.div`
  padding: 20px;
  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 20px;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const BestBoardCardProfile = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 4px;
    }
    h6 {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #828282;
  }
`;
export const BestBoardCardUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const BlackBtn = styled.button`
  width: 94px;
  height: 52px;
  border-radius: 10px;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;
export const BoardListBottom = styled.div`
  position: relative;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0 80px 0;
`;
export const DateItem = styled.input`
  width: 246px;
  height: 52px;
  background: #fff;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
`;
export const NewBoardBtn = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  width: 171px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
export const PageTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
`;
export const SearchIcon = styled.img`
  position: absolute;
  top: 13px;
  left: 16px;
`;
export const SearchItemGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SearchItemBox = styled.div`
  position: relative;
  width: 776px;
  height: 52px;
`;
export const SearchItem = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  padding: 14px 48px;
  background: #f2f2f2;
  font-size: 16px;
  ::placeholder {
    display: flex;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #888;
  }
`;

export const Table = styled.div`
  width: 100%;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  margin: 40px 0;
`;
export const Row = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4f4f4f;
  border-bottom: 1px solid #bdbdbd;
  span {
    display: inline-block;
    padding: 13px 40px;
  }
  span:nth-of-type(1) {
    width: 10%;
  }
  span:nth-of-type(2) {
    width: 60%;
  }
  span:nth-of-type(3) {
    width: 15%;
  }
  span:nth-of-type(4) {
    width: 15%;
  }
`;
export const RowTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #bdbdbd;
  span {
    display: inline-block;
    padding: 13px 40px;
  }
  span:nth-of-type(1) {
    width: 10%;
  }
  span:nth-of-type(2) {
    width: 60%;
  }
  span:nth-of-type(3) {
    width: 15%;
  }
  span:nth-of-type(4) {
    width: 15%;
  }
`;
export const ColumnTitle = styled.p`
  cursor: pointer;
  width: 640px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ColumnWriter = styled.p`
  cursor: pointer;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 80px auto;
`;

export const PagenationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Pagenation = styled.div`
  display: flex;
  align-items: center;
  span {
    width: auto;
    font-size: 16px;
    display: flex;
    font-weight: 400;
    line-height: 20px;
    color: #4f4f4f;
    margin: -1px 10px 0 10px;
    text-align: center;
    justify-content: center;
    cursor: pointer;
  }
  span.target {
    font-size: 17px;
    margin: -2px 10px 0 10px;
    color: #ffd600;
    font-weight: 700;
    text-decoration-line: underline;
  }
`;
export const PageNextBtn = styled.button`
  background-color: #ffffff;
  background-image: url("/images/next.svg");
  background-size: cover;
  background-position: center;
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;
export const PagePrevBtn = styled.button`
  background-color: #ffffff;
  background-image: url("/images/prev.svg");
  background-size: cover;
  background-position: center;
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;
