import * as S from "./BoardWrite.style";
import { IPropsBoardWriteUI } from "./BoardWrite.types";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";

export default function BoardWriteUI(props: IPropsBoardWriteUI) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.PageTitle>게시물 {props.isEdit ? "수정" : "등록"}</S.PageTitle>
        <S.TwinGroup>
          <S.Twin>
            <S.InputTitle>
              작성자<S.Error>{props.writerError}</S.Error>
            </S.InputTitle>
            <S.InputItem
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer || ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
          </S.Twin>
          <S.Twin>
            <S.InputTitle>
              비밀번호<S.Error>{props.passwordError}</S.Error>
            </S.InputTitle>
            <S.InputItem
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
          </S.Twin>
        </S.TwinGroup>
        <S.Group>
          <S.InputTitle>
            제목<S.Error>{props.titleError}</S.Error>
          </S.InputTitle>
          <S.InputItem
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
        </S.Group>
        <S.Group>
          <S.InputTitle>
            내용<S.Error>{props.contentsError}</S.Error>
          </S.InputTitle>
          <S.TextItem
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
        </S.Group>
        <S.AddressGroup>
          <S.InputTitle>주소</S.InputTitle>
          <div>
            <S.InputItem
              type="text"
              readOnly
              value={
                props.zipcode ||
                (props.data &&
                  String(props.data?.fetchBoard.boardAddress?.zipcode)) ||
                ""
              }
              placeholder="우편번호"
            />
            <S.AddressBtn onClick={props.modalToggle}>
              우편번호 검색
            </S.AddressBtn>
            <S.Error>{props.addressError}</S.Error>
          </div>
          <S.InputItem
            type="text"
            readOnly
            value={
              props.address ||
              (props.data &&
                String(props.data?.fetchBoard.boardAddress?.address)) ||
              ""
            }
            placeholder="주소"
          />
          <S.InputItem
            type="text"
            onChange={props.onChangeAddress}
            defaultValue={
              (props.data &&
                String(props.data?.fetchBoard?.boardAddress?.addressDetail)) ||
              ""
            }
            placeholder="상세주소"
          />
        </S.AddressGroup>
        <S.Group>
          <S.InputTitle>유튜브</S.InputTitle>
          <S.InputItem
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={
              (props.data && props.data?.fetchBoard.youtubeUrl) || ""
            }
          />
        </S.Group>
        <S.Group>
          <S.InputTitle>사진 첨부</S.InputTitle>
          <S.UploadList>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={index}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.UploadList>
        </S.Group>
        <S.MainSettingsGroup>
          <S.InputTitle>메인 설정</S.InputTitle>
          <div>
            <S.RadioItem>
              <input type="radio" id="youtube" name="main" />
              <label htmlFor="youtube"></label>
              <span>유튜브</span>
            </S.RadioItem>
            <S.RadioItem>
              <input type="radio" id="picture" name="main" />
              <label htmlFor="picture"></label>
              <span>사진</span>
            </S.RadioItem>
          </div>
        </S.MainSettingsGroup>
        <S.BtnCenter>
          {props.isEdit ? (
            <S.DisabledBtn onClick={props.onClickMoveToList}>
              취소하기
            </S.DisabledBtn>
          ) : null}
          <S.ActivateBtn
            onClick={
              props.isEdit ? props.onClickMoveToEdit : props.onClickSubmit
            }
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.ActivateBtn>
        </S.BtnCenter>
      </S.Container>
    </S.Wrapper>
  );
}
