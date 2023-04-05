import * as S from "./Uploads02.style";
import { IPropsUploads02UI } from "./Uploads02.types";

export default function Uploads02UI(props: IPropsUploads02UI) {
  console.log(props.itemUrl);
  return (
    <>
      {props.itemUrl ? (
        <>
          <S.Delete></S.Delete>
          <S.UploadImg
            onClick={props.onClickUpload}
            src={`https://storage.googleapis.com/${props.itemUrl}`}
            alt="업로드이미지"
          />
        </>
      ) : (
        <S.UploadFile onClick={props.onClickUpload}>
          <img src="/images/upload.svg" alt="플러스" />
          <span>Upload</span>
        </S.UploadFile>
      )}
      <S.InputFile
        type="file"
        onChange={props.onChangeFile}
        ref={props.itemUrlRef}
      />
    </>
  );
}
