import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { checkValidationFile } from "../../src/commons/libraries/validationFile";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0]; // multiple 속성으로 여러개 드래그 가능
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
        // accept={image/png}
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
    </>
  );
}
