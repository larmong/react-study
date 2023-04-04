import * as S from "./layoutHeader.style";
import { ILayoutHeaderUI } from "./layoutHeader.types";
import { Fragment } from "react";
import { useRouter } from "next/router";

const HEADER_MENUS = [
  { name: "로그인", route: "/" },
  { name: "회원가입", route: "join" },
];

export default function LayoutHeaderUI(props: ILayoutHeaderUI) {
  const router = useRouter();

  return (
    <S.Header>
      <S.Logo onClick={() => router.push("/")}></S.Logo>
      <S.Group>
        {HEADER_MENUS.map((el, index) => (
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
