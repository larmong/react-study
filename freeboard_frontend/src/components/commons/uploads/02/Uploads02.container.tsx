import { useRef, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "./Uploads02.queries";
import Uploads02UI from "./Uploads02.presenter";
import { IPropsUploads02 } from "./Uploads02.types";

export default function Uploads02(props: IPropsUploads02) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const itemUrlRef = useRef<HTMLInputElement>(null);

  const onClickUpload = () => {
    itemUrlRef.current?.click();
  };
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeItemUrls(result.data.uploadFile.url, props.index);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Uploads02UI
      itemUrl={props.itemUrl}
      defaultItemUrl={props.defaultItemUrl}
      itemUrlRef={itemUrlRef}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
