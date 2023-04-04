// 1. 함수를 리턴하는 함수
function aaa(){
  const apple = 10

  return function bbb(){
    const banana = 5
    console.log(banana)
    console.log(apple)
  }
}

aaa()()
//
// 실행 결과
// 5
// 6


// 2. 함수를 리턴하는 함수 - 함수선언식
function ccc(apple){

  return function ddd(banana){
    console.log(banana)
    console.log(apple)
  }
}

ccc(2)(3)
// 실행 결과
// 2 => ccc에 넣은 인자값
// 3 => ddd에 넣은 인자값


// 3. 함수를 리턴하는 함수 - 화살표 함수
// 화살표 함수로 변경
const eee = (apple)=>{
  return (banana)=>{
    console.log(apple)
    console.log(banana)
  }
}

eee(2)(3)
// 2 => eee에 넣은 인자값
// 3 => fff에 넣은 인자값


// 4. 화살표함수(3번)의 줄괄호 생략
const ggg = (apple)=>(banana)=>{
  console.log(apple)
  console.log(banana)
}

ggg(2)(3)
