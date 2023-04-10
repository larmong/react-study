// 1. 문자, 숫자, 불린 (primirive) 타입
export const getPrimitive = (
  arg1: string,
  arg2: number,
  arg3: boolean
): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result1 = getPrimitive("철수", 123, true);
//
//
//
// 2. any 타입 => 그냥 자바스크립트랑 같음
export const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 1000); // any 아무거나 다 됨
  return [arg3, arg2, arg1];
};
const result2 = getAny("철수", "as", 123);
//
//
//
// 3. unknown 타입
export const getUnknown = (
  arg1: unknown,
  arg2: unknown,
  arg3: unknown
): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 1000); // unknown 은 사용할 때, 타입을 가정하여 사용해야 함
  return [arg3, arg2, arg1];
};
const result3 = getUnknown("철수", 123, true);
//
//
//
// 4. generic 타입 - 1  ===> 처음 들어온 타입으로 고정 됨(추론)
function getGeneric<MyType1, MyType2, MyType3>(
  arg1: MyType1,
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result4 = getGeneric("철수", 123, true);
//
//
//
// 5. generic 타입 - 2
function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result5 = getGeneric2("철수", 123, true);
//
//
//
// 5. generic 타입 - 3
function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result6 = getGeneric3("철수", 123, true);
//
//
//
// 5. generic 타입 - 4
export const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result7 = getGeneric4("철수", 123, true);
