import { IChildProps } from "../../../../pages/14-04-lifting-state-up";

export default function Child2(props: IChildProps) {
  return (
    <>
      <div>자식 2의 카운트 {props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
