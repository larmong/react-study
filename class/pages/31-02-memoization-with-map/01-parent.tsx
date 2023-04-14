import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationParentPage() {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onClickChange = () => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  };

  return (
    <>
      {data.split(" ").map((el, index) => (
        // 1. memo ===> key 또는 el이 변경된 부문만 리렌더링 됨(즉, "오늘, "먹었습니다." 제외)
        <Word key={index} el={el} />
      ))}
      {data.split(" ").map((el) => (
        // 2. key 자체가 변경되어 props 로 넘어가므로 모두 리렌더링 됨!!
        <Word key={uuidv4()} el={el} />
      ))}
      <button onClick={onClickChange}>체인지!</button>
    </>
  );
}
