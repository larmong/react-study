import styled from "@emotion/styled";
import { Rate } from "antd";

export const Comment = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 58px;
  margin-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;
export const ProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

export const ProfileContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CommentGroup = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
`;
export const CommentWrite = styled.h6`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-right: 16px;
`;
export const CommentScore = styled(Rate)`
  margin-top: -7px;
`;

export const CommentContents = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
  color: #4f4f4f;
`;
export const CommentDate = styled.span`
  position: absolute;
  bottom: -38px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
`;

export const EditGroup = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  img {
    margin-left: 5px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
