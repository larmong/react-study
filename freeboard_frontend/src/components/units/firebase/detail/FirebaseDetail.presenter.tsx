import * as S from "./FirebaseDetail.style";
import { getMyDate } from "../../../../commons/utils/utils";
import { IPropsFirebaseDetailUI } from "./FirebaseDetail.types";

export default function FirebaseDetailUI(props: IPropsFirebaseDetailUI) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.DetailTop>
          <S.Profile>
            <img src="/images/profile.svg" alt="프로필사진" />
            <div>
              <h6>{props.fetchBoard?.writer}</h6>
              <p>
                Date : <span>{getMyDate(props.fetchBoard?.createdAt)}</span>
              </p>
            </div>
          </S.Profile>
          <S.IconGroup>
            <img src="/images/share.svg" alt="공유아이콘" />
            <img
              onMouseOver={props.onMouseOverLocation}
              onMouseOut={props.onMouseOverLocation}
              src="/images/location.svg"
              alt="위치아이콘"
            />
            {props.isHovering ? (
              <S.LocationInfo>
                <p>
                  ({props.fetchBoard?.boardAddress?.zipcode}) &nbsp;
                  {props.fetchBoard?.boardAddress?.address}
                  <br />
                  {props.fetchBoard?.boardAddress?.addressDetail}
                </p>
              </S.LocationInfo>
            ) : null}
          </S.IconGroup>
        </S.DetailTop>
        <S.Line></S.Line>
        <S.DetailTitle>{props.fetchBoard?.title}</S.DetailTitle>
        <S.DetailImages src="/images/sample.png" alt="샘플이미지" />
        <S.DetailContents>
          {props.fetchBoard?.contents}
          {props.fetchBoard?.youtubeUrl && (
            <S.Youtube url={props.fetchBoard?.youtubeUrl} rel={0} />
          )}
        </S.DetailContents>
        <S.UpDownGroup>
          <S.UpDown>
            <img src="/images/up.svg" alt="좋아요" />
            <span>{props.fetchBoard?.likeCount}</span>
          </S.UpDown>
          <S.UpDown>
            <img src="/images/down.svg" alt="싫어요" />
            <span>{props.fetchBoard?.dislikeCount}</span>
          </S.UpDown>
        </S.UpDownGroup>
      </S.Container>
      <S.DetailCenter>
        <S.BtnGroup>
          <S.BorderBtn onClick={props.onClickMoveToList}>목록으로</S.BorderBtn>
          <S.BorderBtn onClick={props.onClickMoveToEdit}>수정하기</S.BorderBtn>
          <S.BorderBtn onClick={props.onClickDelete}>삭제하기</S.BorderBtn>
        </S.BtnGroup>
      </S.DetailCenter>
      <S.Line></S.Line>
    </S.Wrapper>
  );
}
