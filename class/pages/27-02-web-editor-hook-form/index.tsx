import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    // register 로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form 에 알려주는 기능!!
    void trigger("contents");

    console.log(value);
  };
  return (
    <>
      <div>
        작성자: <input type="text" {...register("writer")} />
      </div>
      <div>
        비밀번호: <input type="password" {...register("password")} />
      </div>
      <div>
        제목: <input type="text" {...register("title")} />
      </div>
      <div>
        내용: <ReactQuill onChange={onChangeContents} />
      </div>
      <button>등록하기</button>
    </>
  );
}
