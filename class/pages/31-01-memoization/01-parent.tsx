import MemoizationChildPage from "./02-child";
import { useCallback, useMemo, useState } from "react";

export default function MemoizationParentPage() {
  console.log("Memoization 부모가 렌더링 됩니다!!");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo 로 변수 기억 (useEffect 랑 같은 방법으로 사용)
  const aaa = useMemo(() => Math.random(), []);
  // Math.random();
  console.log(aaa); // state 리렌더링 되면서 계속 실행 됨

  // 2. useCallback 으로 함수 기억
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);
  // const onClickCountLet = () => {
  //   console.log(countLet + 1);
  //   countLet += 1;
  //   // state 리렌더링 되면서 리렌더링 되면서 let 변수는 초기화 됨
  // };

  // 3. useCallback 사용시 state 사용 주의!!!
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);  잘못 사용한 예제: 이미 countState 값은 0이라서 결과는 1만 나옴
    setCountState((prev: number) => prev + 1); // prev 사용해야 됨 !!!
  }, []);
  // const onClickCountState = () => {
  //   console.log(countState + 1);
  //   setCountState(countState + 1);
  //
  //   // console 창
  //   // 1
  //   // Memoization 부모가 렌더링 됩니다!!
  //   // Memoization 자식이 렌더링 됩니다!!
  //
  //   // state 올리면 리렌더링 되면서 자식 컴포넌트도 같이 리렌더링 됨
  // };

  // 4. useMemo 로 나만의 useCallback 만들기 (응용)
  const onClickCountState2 = useMemo(
    () => () => {
      setCountState((prev: number) => prev + 1);
    },
    []
  );

  return (
    <>
      <div>=======================</div>

      <h1>저는 부모 컴포넌트 입니다!!!</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      {/*<div>카운트(state): {countState}</div>*/}
      {/*<button onClick={onClickCountState}>카운트(state) +1 올리기</button>*/}

      {/* 장점: 간편하고 빠름 / 단점: 가독성 떨어짐(유지보수가 힘들어진다.) */}
      <button onClick={() => setCountState((prev: number) => prev + 1)}>
        카운트(state) +1 올리기
      </button>

      <div>=======================</div>
      <MemoizationChildPage />
    </>
  );
}
