import styled from "@emotion/styled";
import { Rate } from "antd";
import { IIsActive } from "./boardCommentWriteItem.types";

export const Comment = styled.div`
  margin-bottom: 40px;
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentInput = styled.input`
  width: 180px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 14px 20px;
  margin-right: 24px;
  font-size: 16px;
`;
export const CommentScore = styled(Rate)`
  margin-top: -7px;
`;
export const CommentContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;
export const CommentText = styled.textarea`
  width: 100%;
  height: ${(props: IIsActive) => (props.isActive ? "64px" : "108px")};
  background: #ffffff;
  border: none;
  padding: 14px 20px;
  resize: none;
  border-bottom: 1px solid #f2f2f2;
`;
export const CommentBtnContainer = styled.div`
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
`;
export const CommentBtn = styled.button`
  width: 91px;
  height: 52px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  border: none;
  cursor: pointer;
  background: ${(props: IIsActive) => (props.isActive ? "#FFD600" : "#000000")};
  color: ${(props: IIsActive) => (props.isActive ? "#000000" : "#ffffff")};
`;
