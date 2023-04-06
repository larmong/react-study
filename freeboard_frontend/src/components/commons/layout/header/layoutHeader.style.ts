import styled from "@emotion/styled";

export const Header = styled.header`
  width: 1200px;
  height: 160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.h1`
  width: 236px;
  height: 36px;
  background-image: url("/images/logo.svg");
  background-size: contain;
  background-position: center;
  cursor: pointer;
`;
export const Group = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const HeaderMenu = styled.button`
  width: 92px;
  height: 44px;
  border-radius: 10px;
  font-weight: 600;
  color: #333;
  background: #eee;
  &#join {
    background: #ffd600;
  }
`;

export const User = styled.div`
  display: inline-block;
  span {
    display: inline-block;
    margin-right: 5px;
    font-weight: bold;
  }
`;
