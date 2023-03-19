import * as S from "./BoardDetail.style";
import { getMyDate } from "../../../../commons/utils/utils";
import { IPropsBoardDetailUI } from "./BoardDetail.types";

export default function BoardDetailUI(props: IPropsBoardDetailUI) {
  console.log(props.fetchBoard);
  return (
    <S.Wrapper>
      <S.Container>
        <S.DetailTop>
          <S.Profile>
            <img src="/profile.svg" alt="프로필사진" />
            <div>
              <h6>{props.fetchBoard?.fetchBoard?.writer}</h6>
              <p>
                Date :{" "}
                <span>
                  {getMyDate(props.fetchBoard?.fetchBoard?.createdAt)}
                </span>
              </p>
            </div>
          </S.Profile>
          <S.IconGroup>
            <img src="/share.svg" alt="공유아이콘" />
            <img
              onMouseOver={props.onMouseOverLocation}
              onMouseOut={props.onMouseOverLocation}
              src="/location.svg"
              alt="위치아이콘"
            />
            {props.isHovering ? (
              <S.LocationInfo>
                <p>
                  ({props.fetchBoard?.fetchBoard?.boardAddress?.zipcode}) &nbsp;
                  {props.fetchBoard?.fetchBoard?.boardAddress?.address}
                  <br />
                  {props.fetchBoard?.fetchBoard?.boardAddress?.addressDetail}
                </p>
              </S.LocationInfo>
            ) : null}
          </S.IconGroup>
        </S.DetailTop>
        <S.Line></S.Line>
        <S.DetailTitle>{props.fetchBoard?.fetchBoard?.title}</S.DetailTitle>
        <S.DetailImages src="/sample.png" alt="샘플이미지" />
        <S.DetailContents>
          {props.fetchBoard?.fetchBoard?.contents}
        </S.DetailContents>
        <S.UpDownGroup>
          <S.UpDown>
            <img src="/up.svg" alt="좋아요" />
            <span>{props.fetchBoard?.fetchBoard?.likeCount}</span>
          </S.UpDown>
          <S.UpDown>
            <img src="/down.svg" alt="싫어요" />
            <span>{props.fetchBoard?.fetchBoard?.dislikeCount}</span>
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
