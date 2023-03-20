import * as S from "./header.style";

export default function LayoutHeader() {
  return (
    <S.Header>
      <S.Logo></S.Logo>
      <S.Group>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.JoinBtn>회원가입</S.JoinBtn>
      </S.Group>
    </S.Header>
  );
}
