import * as S from "./header.style";
import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();
  return (
    <S.Header>
      <S.Logo onClick={() => router.push(`/boards`)}></S.Logo>
      <S.Group>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.JoinBtn>회원가입</S.JoinBtn>
      </S.Group>
    </S.Header>
  );
}
