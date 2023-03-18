import styled from "@emotion/styled";

export const Comment = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 58px;
  margin-bottom: 20px;
`;
export const CommentScore = styled.div`
  display: inline-block;
`;
export const CommentProfile = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
    margin-top: 4px;
  }
  span {
    position: absolute;
    bottom: -38px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #bdbdbd;
  }
`;
export const CommentProfileNameScore = styled.div`
  display: flex;
  align-items: center;
  h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-right: 16px;
  }
  > div {
    img {
      width: 24px;
      height: 24px;
      margin-right: 0;
    }
  }
`;
export const EditGroup = styled.div`
  align-items: center;
  img {
    margin-left: 5px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
