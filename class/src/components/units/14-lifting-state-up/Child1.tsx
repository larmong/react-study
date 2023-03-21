import { IChildProps } from "../../../../pages/14-04-lifting-state-up";

export default function Child1(props: IChildProps) {
  const onClick = () => {
    props.setCount((prev: number) => prev + 1);
  };
  return (
    <>
      <div>자식 1의 카운트 {props.count}</div>
      <button onClick={onClick}>카운트 올리기!!!</button>
    </>
  );
}
