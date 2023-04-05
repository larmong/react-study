import { ChangeEvent, useRef } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { checkValidationImage } from "./Uploads01.validation";
import { IUploads01 } from "./Uploads01.types";
import Uploads01UI from "./Uploads01.presenter";

export default function Uploads01(props: IUploads01) {
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const fileRef = useRef<HTMLInputElement>(null);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      // @ts-ignore
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
