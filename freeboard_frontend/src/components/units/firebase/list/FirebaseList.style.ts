import styled from "@emotion/styled";

export const BoardListBottom = styled.div`
  position: relative;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
