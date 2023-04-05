import { IUploads01UI } from "./Uploads01.types";
import * as S from "./Uploads01.style";

export default function Uploads01UI(props: IUploads01UI) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          alt="업로드이미지"
        />
      ) : (
        <S.UploadFile onClick={props.onClickUpload}>
          <img src="/images/upload.svg" alt="플러스" />
          <span>Upload</span>
        </S.UploadFile>
      )}
      <S.InputFile
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
