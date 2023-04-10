import { useState } from "react";

export default function DestructuringPage() {
  const result = useState(0);

  function onClickCountUp() {
    result[1](result[0] + 1);
  }

  return (
    <>
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>카운트 올리기👍</button>
    </>
  );
}
