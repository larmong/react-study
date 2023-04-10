import { useMoveToPage } from "../../src/components/commons/hocs/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  const { onClickMoveToPage, visitedPage } = useMoveToPage();
  // visitedPage < 구조분해할당으로 필요한 페이지에서 뽑아서 사용할 수 있음

  return (
    <>
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </>
  );
}
