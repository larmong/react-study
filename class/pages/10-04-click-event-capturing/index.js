export default function ClickEventCapturingPage() {
  const aaa = (event) => {
    event.stopPropagation();
    alert("저는 aaa입니다!");
  };
  const bbb = () => {
    alert("22222222222");
  };
  const ccc = () => {
    alert("111111111111");
  };

  return (
    <>
      <div onClick={ccc}>
        3
        <div onClick={aaa}>
          2<div onClick={bbb}>1</div>
        </div>
      </div>
    </>
  );
}
