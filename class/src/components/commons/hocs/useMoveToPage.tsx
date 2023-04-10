import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();

  // 페이지 이동 전 원래 있던 페이지를 글로벌 스테이트에 저장해둠.
  // 혹시 다음 이동되는 페이지에서 로그인이 필요한 페이지라면 로그인 후 다시 이전페이지로 돌아오는 기능을 위함
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path);
    void router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
}
