import {BlueButton, RedInput} from "@/src/components/units/board/07-write/BoardWrite.styles";

export default function BoardWriteUI(props) {
  // 자바스크립트 영역

  return (
    <>
      <div>{props.isEdit ? "수정" : "등록"}페이지</div>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} /><br />
      제목: <input type="text" onChange={props.onChangeTitle} /><br />
      내용: <input type="text" onChange={props.onChangeContents} /><br />
      <BlueButton
        fz="32px"
        bg={props.myColor}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
    </>
  )
}
