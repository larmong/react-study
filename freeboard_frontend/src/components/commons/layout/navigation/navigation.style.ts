import styled from "@emotion/styled";

export const Navigation = styled.nav`
  width: 100%;
  background: #ffd600;
`;
export const Container = styled.div`
  width: 1200px;
  height: 64px;
  margin: 0 auto;
`;
export const MenuGroup = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
export const Menu = styled.li`
  position: relative;
  margin: 0 20px;
  cursor: pointer;
  padding: 10px 20px;
  color: #ab9000;
  font-weight: 500;
  ::before {
    content: "";
    position: absolute;
    top: 10px;
    right: -20px;
    width: 1px;
    height: 20px;
    background: #fff;
  }
  :last-child::before {
    content: none;
  }
  &.target {
    color: #514400;
    font-weight: 700;
  }
`;
