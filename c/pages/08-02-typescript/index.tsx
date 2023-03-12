import {Interface} from "readline";
import {string} from "prop-types";

export default function TypeScriptPage() {

    // 타입추론
    let aaa = "안녕하세요";
    // aaa = 3;


    // 타입명시
    let bbb: string = "반갑습니다";
    bbb = "반가워요!"


    // 문자타입(선언과 할당 분리) ===> 이럴때 타입 지정 필요 함!!!!!!!
    let ccc: string
    ccc = "반가워요!"


    // 숫자 타입
    let ddd:number = 10;
    // ddd = "철수"


    // 불린 타입
    let eee: boolean = true;
    eee = false;
    // eee = "false";  // javascript에서는 true로 작동 함!


    // 배열 타입
    let fff: number[] = [1, 2, 3, 4, 5];  // 숫자만 가능한 배열
    let ggg: string[] = ['a', 'b', 'c', 'd', 'e'];  // 문자만 가능한 배열
    let hhh: (string | number)[] = ['a', 'b', 'c', 1, 2, 3];  // 숫자+문자 모두 가능한 배열


    // 객체 타입
    interface IProfile {
        name: string
        age: number | string
        school: string
    }  // 객체타입은 interface + IProfile(이름) 만들고 각각 타입을 지정해 줌
    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }


    // 함수 타입 => 어디서 몇번이든 호출 가능하므로 타입추론 할 수 없음(반드시, 타입 명시 필요)
    const add = (number1: number, number2: number, unit: string): string => {
        return number1 + number2 + unit
    }
    const result = add(1000, 2000, "원") // 결과의 리턴 타입도 예측 가능!!!
    console.log(result)


    // any 타입
    let qqq: any = "철수" // 자바스크립트와 동일!
    qqq = 123
    qqq = "aaa"




    return (
        <>
            안녕하세유
        </>
    )
}
