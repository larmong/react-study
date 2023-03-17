import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  // const onClickCountUp = () => {
  //   setCount(count + 1); // 현재 count는 0 + 1 => 1을 상자에 담는다.
  //   setCount(count + 1); // 1 이 상자에 담겼지만 여전히 count는 0 이므로 1이 상자에 담긴다
  //   setCount(count + 1); // ...
  //   setCount(count + 1); // ...
  //   setCount(count + 1); // 같은 방식으로 최종적으로 1이 상자에 담겨 화면에 1이 반영된다
  // };
  const onClickCountUp = () => {
    setCount((prev) => prev + 1); // 임시저장공간의 0(기본값, prev) + 1 => 1을 상자에 담는다.
    setCount((prev) => prev + 1); // 임시저장공간에 담긴 1(prev) + 1 => 2를 상자에 담는다.
    setCount((prev) => prev + 1); // ...
    setCount((prev) => prev + 1); // ...
    setCount((prev) => prev + 1); // 같은 방식으로 최종적으로 5가 상자에 담겨 화면에 5가 반영된다
  };

  return (
    <>
      <span id="count">{count} </span>
      <button onClick={onClickCountUp}>카운트 올리기👍</button>
    </>
  );
}
