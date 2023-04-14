// import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObservableFlatmapPage() {
  const onClickButton = () => {
    // new Promise(() => {})      ===> Promise 사용법
    // new Observable(() => {})   ===> apollo 에서 제공해주고 있는 Observable

    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) // ===> fromPromise
      .flatMap((el) => from([`${el} 결과에 qqq 적용`, `${el} 결과에 zzz 적용`]))
      .subscribe((el) => console.log(el)); // ===> subscribe: 실행
  };

  return <button onClick={onClickButton}>클릭</button>;
}
