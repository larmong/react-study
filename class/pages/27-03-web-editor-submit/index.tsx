import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    // register 로 등록하지 않고, 강제로 값을 넣어주는 기능!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form 에 알려주는 기능!!
    void trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });
    router.push(
      `/27-04-web-editor-detail/${String(result.data?.createBoard._id)}`
    );
  };

  return (
    // prettier-ignore
    <form onSubmit={handleSubmit(onClickSubmit)}><br />
      작성자: <input type="text" {...register("writer")} /><br />
      비밀번호: <input type="password" {...register("password")} /><br />
      제목: <input type="text" {...register("title")} /><br />
      내용: <ReactQuill onChange={onChangeContents} /><br />
      <button>등록하기</button><br />
    </form>
  );
}
