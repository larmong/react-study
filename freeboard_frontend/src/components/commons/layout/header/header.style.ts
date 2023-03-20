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
  button {
    margin-left: 10px;
    width: 92px;
    height: 44px;
    border-radius: 10px;
    font-weight: 700;
  }
`;
export const LoginBtn = styled.button``;
export const JoinBtn = styled.button`
  background: #ffd600;
`;
