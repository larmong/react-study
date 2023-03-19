import styled from "@emotion/styled";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;
export const ModalContainer = styled.div`
  padding: 55px 20px 20px 20px;
  width: 500px;
  height: auto;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;
export const CloseBtn = styled.button`
  transition: all ease-in 0.2s;
  position: absolute;
  right: 20px;
  top: 20px;
  border: 0;
  background: #fff;
  border-radius: 3px;
  color: #888;
  padding: 3px 7px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background: #eee;
    color: #555;
  }
`;
export const ModalContents = styled.div``;
