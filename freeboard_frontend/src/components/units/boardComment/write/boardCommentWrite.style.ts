import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentCreate = styled.div`
  margin-bottom: 40px;
`;
export const CommentCreateBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    display: inline-block;
    margin-left: 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
  button {
    width: 91px;
    height: 52px;
    background: #000000;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    border: none;
    cursor: pointer;
  }
`;
export const CommentCreateContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 161px;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;
export const CommentCreateInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentCreateInput = styled.input`
  width: 180px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 14px 20px;
  margin-right: 24px;
  font-size: 16px;
`;
export const CommentCreateScore = styled(Rate)`
  margin-top: -7px;
`;
export const CommentCreateText = styled.textarea`
  width: 100%;
  height: 108px;
  background: #ffffff;
  border: none;
  padding: 14px 20px;
  resize: none;
  border-bottom: 1px solid #f2f2f2;
`;
export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
`;
