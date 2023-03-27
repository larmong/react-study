import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionLifeCyClePage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // useEffect(() => {}, []);  => [] : 의존성 배열    <- 처음에도, 변경되고도 실행 함
  // ex) [] 안에 "변수"를 넣어서 "변수"가 바뀌면 실행
  // useEffect(() => {
  //   console.log("변경되고 나서 실행!");
  // }, []);

  // 1. componentDidMount() {
  //   console.log("그려지고 나서 실행!");
  // }
  useEffect(() => {
    console.log("그려지고 나서 실행!");
  }, []);
  // => 의존성 배열이 비어있으니까 한번만 실행하게 됨 === componentDidMount

  // 2. componentDidUpdate() {
  //   console.log("변경되고 나서 실행!");    <- 처음엔 실행 안됨(변경 되고만 실행 함)
  // }
  useEffect(() => {
    console.log("변경되고 나서 실행!");
  });

  // => 의존성 배열이 아예 없는 상태라 모든 걸 의미함. 어떤거 하나라도 바뀌면 실행 됨 == componentDidUpdate (비슷)

  // 3. componentWillUnmount() {
  //   console.log("사라질 때 실행!");
  // // }
  useEffect(() => {
    return () => {
      console.log("사라질 때 실행!");
    };
  }, []);
  // => return을 넣으면 사라질 때 한번만 실행하게 됨 === componentWillUnmount

  // 1) 그려지고 나서 한번만 실행, 사라질 때 한번만 실행은 하나로 합칠 수 있다.
  // useEffect(() => {
  //   console.log("그려지고 나서 실행!");
  //   return () => {
  //     console.log("사라질 때 실행!");
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log("변경되고 나서 실행!");
  // });

  // 2) useEffect 잘못된 사용 예제
  // set state는 지양하는게 좋음: 두번 렌더링을 하게 됨  ===> 추가 렌더링
  // 아래 예제(count up)에서 의존성배열에 count를 넣는다던가, 의존성 배열을 없애버리면 무한루프에 빠지게 됨 ===> 무한루프
  // useEffect(() => {
  //   setCount((prev: number) => prev + 1);
  // }, [count]);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  return (
    <>
      <div>리액트에서 제공해주는 기능입니다.</div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </>
  );
}
