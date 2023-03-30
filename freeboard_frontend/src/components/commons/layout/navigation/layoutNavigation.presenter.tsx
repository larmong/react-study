import * as S from "./layoutNavigation.style";
import { ILayoutNavigationUI } from "./layoutNavigation.types";
import { Fragment } from "react";

const NAVIGATION_MENUS = [
  { name: "날씨예보", route: "weathers" },
  { name: "파이어베이스", route: "firebase" },
  { name: "자유게시판", route: "boards" },
  { name: "중고마켓", route: "market" },
  { name: "마이페이지", route: "mypage" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUI) {
  return (
    <S.Navigation>
      <S.MenuGroup>
        {NAVIGATION_MENUS.map((el, index) => (
          <Fragment key={index}>
            <S.Menu
              id={el.route}
              className={props.nowRoute === el.route ? "target" : ""}
              onClick={props.onClickMoveToMenus}
            >
              {el.name}
            </S.Menu>
          </Fragment>
        ))}
      </S.MenuGroup>
    </S.Navigation>
  );
}
