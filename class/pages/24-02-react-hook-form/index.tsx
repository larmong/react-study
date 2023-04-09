import { useForm } from "react-hook-form";

export default function ReactHookFormPage() {
  type FormData = {
    writer: string;
    title: string;
    contents: string;
  };
  const { register, handleSubmit } = useForm<FormData>();

  const onClickSubmit = () => {};
  const onClickSubmit2 = (data: any) => {
    console.log(data);
  };

  return (
    <>
      {/* 기본 form(html*AJX) */}
      {/*  prettier-ignore */}
      <form onSubmit={onClickSubmit}>
        작성자: <input type="text" /><br />
        제목: <input type="text" /><br />
        내용: <input type="text" /><br />
        <button>등록하기</button>
      </form>
      <br />
      <br />
      <br />
      {/* react-hook-form API */}
      {/*  prettier-ignore */}
      <form onSubmit={handleSubmit(onClickSubmit2)}>
        작성자: <input type="text" {...register("writer")} /><br />
        제목: <input type="text" {...register("title")} /><br />
        내용: <input type="text" {...register("contents")} /><br />
        <button>등록하기</button>
      </form>
    </>
  );
}

/*
    * AJX 에서는 form 안에서 버튼 type 입력 안하면 디폴드 값은 [ submit ] !!
   <button type="button">나만의버튼</button>  기본 버튼
   <button type="reset">등록하기</button>  input 이 모두 초기화 됨
   <button type="submit">등록하기</button> form 에 있는 onSubmit=""에 있는 주소로 보내짐
*/
