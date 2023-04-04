import * as S from "./Login.style";
import { IPropsLoginPageUI } from "./Login.types";

export default function LoginPageUI(props: IPropsLoginPageUI) {
  return (
    <S.Wrapper>
      <S.Login>
        <S.Title>LOGIN</S.Title>
        <S.ID>
          <S.Input
            id="email"
            type="text"
            placeholder="user@example.com"
            onChange={props.onChangeUserInfo}
          />
        </S.ID>
        <S.Password>
          <S.Input
            id="password"
            type="password"
            placeholder="password"
            onChange={props.onChangeUserInfo}
          />
        </S.Password>
        <S.SaveId>
          <S.Checkbox type="checkbox" id="save-id" />
          <S.Label htmlFor="save-id">아이디 저장하기</S.Label>
        </S.SaveId>
        <S.LoginBtn onClick={props.onClickLogin}>LOGIN</S.LoginBtn>
      </S.Login>
    </S.Wrapper>
  );
}
