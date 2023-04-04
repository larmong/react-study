import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  margin-top: 50px;
  padding: 40px;
  border-radius: 20px;
`;
export const Title = styled.span`
  color: #ffd600;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 30px;
`;
export const ID = styled.div``;
export const Password = styled.div`
  margin: 15px 0;
`;
export const Input = styled.input`
  width: 100%;
  height: 52px;
  background: #fff;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  font-size: 16px;
  border-radius: 7px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
`;

export const SaveId = styled.div`
  display: flex;
  align-items: center;
`;
export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  border: none;
`;
export const Label = styled.label`
  margin-top: 2px;
  margin-left: 7px;
  color: #666;
`;

export const LoginBtn = styled.button`
  margin: 40px 0;
  width: 100%;
  height: 60px;
  background: #ffd600;
  color: #444;
  font-size: 20px;
  border-radius: 7px;
  font-weight: bold;
  letter-spacing: 2px;
`;
