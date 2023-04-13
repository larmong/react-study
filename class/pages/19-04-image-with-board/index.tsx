import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput) {
    createBoard(createBoardInput: $createBoardInput) {
      
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: writer,
          password: "1234",
          title: title,
          contents: contents,
          images: [imgUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    console.log(file);

    const isValid = checkValidationFile();
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      setImgUrl(result.data?.uploadFile?.url ?? "");
    } catch (err) {
      console.log(err);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      <div
        style={{ width: "50px", height: "50px", background: "green" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
