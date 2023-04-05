import styled from "@emotion/styled";

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
export const LocationGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  height: 292px;
`;
export const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  margin-right: 24px;
`;
export const MapAPI = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Location = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GPS = styled.div`
  margin-bottom: 40px;
  > div {
    display: flex;
    align-items: flex-end;
  }
`;
export const MapBtn = styled.button`
  width: 108px;
  height: 52px;
  left: 870px;
  top: 1929px;
  border: 1px solid #bdbdbd;
  color: #4f4f4f;
`;
export const MapImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px 16px;
`;

export const BtnCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 60px 100px 100px 100px;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;
export const InputItem = styled.input`
  width: 100%;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  margin-bottom: 16px;
`;
export const InputTitle = styled.span`
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 16px;
`;
export const MainSettingsGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  > div {
    display: flex;
    flex-direction: row;
  }
`;
export const PageTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
`;
export const RadioItem = styled.div`
  display: flex;
  margin-right: 22px;
  input {
    display: none;
  }
  input + label {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #000000;
    cursor: pointer;
  }
  input:checked + label {
    position: relative;
    background: #fff;
    border: 1px solid #ffd600;
  }
  input:checked + label:before {
    position: absolute;
    content: "";
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffd600;
  }
  span {
    display: inline-block;
    margin-left: 5px;
    font-size: 16px;
    line-height: 23px;
    color: #333;
  }
`;
export const TextItem = styled.textarea`
  width: 100%;
  height: 480px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  resize: none;
  font-size: 16px;
`;
export const UploadList = styled.ul`
  display: flex;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 80px auto;
`;
