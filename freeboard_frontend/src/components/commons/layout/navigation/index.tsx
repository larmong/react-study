import * as S from "./navigation.style";

interface ILayoutNavigationProps {
  naviId: string;
}

export default function LayoutNavigation(props: ILayoutNavigationProps) {
  console.log(props.naviId);
  const naviId = props.naviId;
  return (
    <S.Navigation>
      <S.Container>
        <S.MenuGroup>
          <S.Menu className={naviId === "boards" ? "target" : ""}>
            자유게시판
          </S.Menu>
          <S.Menu className={naviId === "market" ? "target" : ""}>
            중고마켓
          </S.Menu>
          <S.Menu className={naviId === "mypage" ? "target" : ""}>
            마이페이지
          </S.Menu>
        </S.MenuGroup>
      </S.Container>
    </S.Navigation>
  );
}
