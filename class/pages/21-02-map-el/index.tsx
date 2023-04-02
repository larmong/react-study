export default function MapElPage() {
  // 1. 기본 방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  // 2. 매개변수를 변경한 방법
  ["철수", "영희", "훈이"].forEach((a, b) => {
    console.log("el: ", a);
    console.log("index: ", b);
  });

  // 3. 함수선언식 방법
  ["철수", "영희", "훈이"].forEach(function (a, b) {
    console.log("el: ", a);
    console.log("index: ", b);
  });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el: ", index);
    console.log("index: ", el);
  });

  return <></>;
}
