import * as S from "./layoutHeader.style";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Fragment } from "react";
import { accessTokenState } from "../../../../commons/store";
import { ILayoutHeaderUI } from "./layoutHeader.types";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LayoutHeaderUI(props: ILayoutHeaderUI) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  let HEADER_MENUS: any;
  // prettier-ignore
  if (accessToken) HEADER_MENUS = [{ name: "로그아웃", route: "/" }];
  // prettier-ignore
  if (!accessToken) HEADER_MENUS = [{ name: "로그인", route: "/" }, { name: "회원가입", route: "join" }];

  return (
    <S.Header>
      <S.Logo onClick={() => router.push("/")}></S.Logo>
      <S.Group>
        {accessToken && (
          <S.User>
            <span>{data?.fetchUserLoggedIn.name}</span>님 환영합니다!🫶
          </S.User>
        )}
        {HEADER_MENUS.map((el: any, index: any) => (
          <Fragment key={index}>
            <S.HeaderMenu id={el.route} onClick={props.onClickMoveToMenus}>
              {el.name}
            </S.HeaderMenu>
          </Fragment>
        ))}
      </S.Group>
    </S.Header>
  );
}
