import styled from "@emotion/styled";

export const InputFile = styled.input`
  display: none;
`;
export const UploadFile = styled.li`
  width: 180px;
  height: 180px;
  margin-right: 24px;
  background: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    width: 14px;
    height: 14px;
    margin-bottom: 5px;
  }
  > span {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: #4f4f4f;
  }
`;
export const UploadImg = styled.img`
  position: relative;
  width: 180px;
  height: 180px;
  margin-right: 24px;
  cursor: pointer;
`;
export const Delete = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/images/delete.svg");
  background-position: center;
  background-size: contain;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;
