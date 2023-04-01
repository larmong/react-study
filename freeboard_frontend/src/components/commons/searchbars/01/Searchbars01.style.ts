import styled from "@emotion/styled";

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
export const SearchIcon = styled.img`
  position: absolute;
  top: 13px;
  left: 16px;
`;
