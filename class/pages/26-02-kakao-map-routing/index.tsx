import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapRoutingPage() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    router.push("/26-03-kakao-map-routed");
  };

  return (
    // <button onClick={onClickMoveToMap}>맵으로 이동하기</button>
    // <a href="/26-03-kakao-map-routed">맵으로 이동하기</a>         ===>  MPA(Multi Page Application)
    // <Link href="/26-03-kakao-map-routed">맵으로 이동하기</Link>   ===>  CSR / SPA(Single Page Application)
    <Link href="/26-03-kakao-map-routed">
      <a>맵으로 이동하기</a>
    </Link>
  );
}
