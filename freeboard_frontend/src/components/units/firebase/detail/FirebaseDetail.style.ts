import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const BorderBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
`;
export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  button:last-child {
    margin-right: 0;
  }
`;
export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 60px 100px 100px 100px;
`;
export const DetailCenter = styled.div`
  margin: 100px auto 87px auto;
`;
export const Youtube = styled(ReactPlayer)`
  margin: 20px auto;
`;
export const DetailContents = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 40px;
`;
export const DetailImages = styled.img`
  width: 100%;
  margin-bottom: 40px;
`;
export const DetailTitle = styled.h3`
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  margin: 80px 0 40px 0;
`;
export const DetailTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;
export const IconGroup = styled.div`
  position: relative;
  width: 77px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #bdbdbd;
`;
export const LocationInfo = styled.div`
  position: absolute;
  right: 10px;
  bottom: 60px;
  width: auto;
  height: 64px;
  background: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: #ffffff;
  padding: 8px 16px;
  p {
    white-space: nowrap;
  }
  :before {
    content: "";
    position: absolute;
    bottom: -14px;
    right: 0;

    width: 0;
    height: 0;
    border-top: 7px solid rgba(0, 0, 0, 0.6);
    border-bottom: 7px solid transparent;
    border-right: 7px solid rgba(0, 0, 0, 0.6);
    border-left: 7px solid transparent;
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 12px;
  }
  h6 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #828282;
  }
`;
export const UpDown = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    margin-bottom: 3px;
    cursor: pointer;
  }
  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #ffd600;
  }
`;
export const UpDownGroup = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 120px auto 0 auto;
  div:last-child {
    span {
      color: #828282;
    }
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 80px auto 0px auto;
`;
