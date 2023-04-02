import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState<number>(0);

  function onClickCountUp() {
    // 1. 화살표 함수
    setCount((prev: number) => prev + 1);

    // 2. 함수선언식
    setCount(function (prev: number) {
      return prev + 1;
    });

    // 3. 함수안에 로직 넣기
    setCount((prev: number) => {
      // 로직 추가 가능
      // if() 등
      // for 등
      // ...

      return prev + 1;
    });

    // 4. 매개변수 바꿔보기
    setCount((a: number) => a + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기👍</button>
    </>
  );
}
