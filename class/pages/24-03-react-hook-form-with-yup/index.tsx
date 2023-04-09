import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ReactHookFormPage() {
  type FormData = {
    writer: string;
    title: string;
    contents: string;
  };

  const schema = yup.object({
    writer: yup.string().required("작성자를 입력해주세요!"),
    title: yup.string().required("제목을 입력해주세요!"),
    contents: yup.string().required("내용을 입력해주세요!"),

    // email: yup
    //   .string()
    //   .email("이메일 형식에 적합하지 않습니다.")
    //   .required("이메일을 입력해주세요!"),
    // password: yup
    //   .string()
    //   .min(4, "비밀번호는 최소 4자리 이상으로 입력해 주세요.")
    //   .max(15, "비밀번호는 최대 15자리 이하로 입력해 주세요.")
    //   .required("비밀번호를 입력해주세요!"),
    // phone: yup
    //   .string()
    //   .matches(/^d{3}-\d{3,4}-\d{4}$/) // 정규표현식
    //   .required("휴대폰을 입력해 주세요!"),
  });

  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange", // 제어 컴포넌트로 바꿈
  });

  const onClickSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    // react-hook-form API
    //  prettier-ignore
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} /><br />
      <div>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} /><br />
      <div>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} /><br />
      <div>{formState.errors.contents?.message}</div>
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>등록하기</button>
    </form>
  );
}
