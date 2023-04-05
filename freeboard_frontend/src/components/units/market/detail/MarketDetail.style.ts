import styled from "@emotion/styled";

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  button:last-child {
    margin-right: 0;
  }
`;
export const DisabledBtn = styled.button`
  width: 179px;
  height: 52px;
  background: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #4f4f4f;
  margin-right: 24px;
`;
export const ActivateBtn = styled.button`
  width: 179px;
  height: 52px;
  background: #ffd600;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #000000;
`;

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 60px 100px 100px 100px;
`;
export const DetailCenter = styled.div`
  margin: 100px auto 87px auto;
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
  margin-bottom: 40px;
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
export const Wrapper = styled.div`
  width: 100%;
  margin: 80px auto 0px auto;
`;

export const ItemDetail = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 40px;
`;

export const ItemRemarks = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
`;
export const ItemName = styled.p`
  margin: 4px 0 8px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #4f4f4f;
`;
export const ItemPrice = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  color: #333;
`;
export const ItemContents = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #4f4f4f;
`;
export const ItemTags = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  margin-top: 40px;
`;
export const ItemSlider = styled.div`
  margin: 80px 0;
`;
export const Location = styled.div`
  margin: 80px auto 0 auto;
  width: 792px;
  height: 360px;
  background: #eee;
`;

export const SlideMain = styled.img`
  display: block;
  margin: 0 auto;
  width: 296px;
  height: 296px;
`;
