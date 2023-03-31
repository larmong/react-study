import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple 속성으로 여러개 드래그 가능
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } });
      setImgUrl(result.data?.uploadFile?.url ?? "");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </>
  );
}
