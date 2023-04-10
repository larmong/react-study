import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  // 내부에서 useState, useEffect와 같은 hook을 사용하게 되면 custom hook이라고 하는데
  // 그럴땐 함수 앞에 use를 붙여준다. (기능상에 문제는 없음)
  useAuth();

  return <div>프로필 페이지 입니다.</div>;
}
