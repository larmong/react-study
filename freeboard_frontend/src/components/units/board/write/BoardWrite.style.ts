import styled from "@emotion/styled";
import DaumPostcodeEmbed from "react-daum-postcode";

export const ActivateBtn = styled.button`
  border: none;
  width: 179px;
  height: 52px;
  background: #ffd600;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #000000;
  cursor: pointer;
`;
export const DisabledBtn = styled.button`
  border: none;
  width: 179px;
  height: 52px;
  background: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #4f4f4f;
  cursor: pointer;
  margin-right: 24px;
`;
export const AddressBtn = styled.button`
  border: none;
  width: 124px;
  height: 52px;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin-left: 16px;
  cursor: pointer;
`;
export const AddressGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  > div {
    margin-bottom: 16px;
    input {
      width: 90px;
    }
  }
  > input {
    margin-bottom: 16px;
  }
`;
export const BtnCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Container = styled.div`
  width: 1200px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 60px 100px 100px 100px;
`;
export const Error = styled.span`
  color: #d01010;
  display: inline-block;
  margin-left: 20px;
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
export const Twin = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
`;
export const TwinGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
  padding-top: 80px;
`;
export const UploadImg = styled.li`
  width: 78px;
  height: 78px;
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
export const UploadList = styled.ul`
  display: flex;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 80px auto;
`;
