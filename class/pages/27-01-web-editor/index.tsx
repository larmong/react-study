// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import { Modal } from "antd";

// Server Error === ReferenceError: document is not defined 이슈 (react에선 오류 안나지만 next에서는 오류 남)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };

  const onClickSubmit = () => {
    // code-splitting(코드 스플릿팅)
    // 한번만 쓰이는건데 전체페이지 렌더링 할때 다운로드 받는것보다는 onClickSubmit 버튼을 눌렀을때 받는것이 성능에 좋음
    // 모달은 여기저기 사용하니까 상관없음
    // const { Modal } = dynamic(async () => await import("antd"), { ssr: false });
    // Modal.success({ content: "등록에 성공하였습니다!" })
  };

  return (
    <>
      <div>
        작성자: <input type="text" />
      </div>
      <div>
        비밀번호: <input type="password" />
      </div>
      <div>
        제목: <input type="text" />
      </div>
      <div>
        내용: <ReactQuill onChange={onChangeContents} />
      </div>
      <button>등록하기</button>
    </>
  );
}
