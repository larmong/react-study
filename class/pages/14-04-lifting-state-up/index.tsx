import Child1 from "../../src/components/units/14-lifting-state-up/Child1";
import Child2 from "../../src/components/units/14-lifting-state-up/Child2";
import { useState } from "react";

export interface IChildProps {
  count: number;
  setCount: any;
  onClickCountUp: () => void;
}

export default function LiftingStateUpPage() {
  // 부모의 state 조작 방법 1
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount((prev: number) => prev + 1);
  };

  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>==============</div>
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </>
  );
}
