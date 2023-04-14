import { memo } from "react";

function MemoizationChildPage() {
  console.log("Memoization 자식이 렌더링 됩니다!!");

  return (
    <>
      <div>=======================</div>
      <h1>저는 자식 컴포넌트 입니다!!!</h1>
      <div>=======================</div>
    </>
  );
}

// react 에서 제공해주는 HOC memo : 자식컴포넌트의 불필요한 리렌더링 막기!!!
// 단, 부모가 넘겨주는 props 의 데이터가 변경되면 리렌더링 됨
// 불필요한 memo 사용은 하지 않는것이 좋음. 왜냐면 memo 는 메모리에 어딘가에 저장해두는건데 남용하게 되면 오히려 메모리를 낭비하게 되는 꼴이 되어버림!!
export default memo(MemoizationChildPage);
