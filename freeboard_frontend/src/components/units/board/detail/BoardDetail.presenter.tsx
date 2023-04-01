import * as S from "./BoardDetail.style";
import { getMyDate } from "../../../../commons/utils/utils";
import { IPropsBoardDetailUI } from "./BoardDetail.types";

export default function BoardDetailUI(props: IPropsBoardDetailUI) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.DetailTop>
          <S.Profile>
            <img src="/images/profile.svg" alt="프로필사진" />
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
        <S.ImageWrapper>
          {props.fetchBoard?.fetchBoard?.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </S.ImageWrapper>
        <S.DetailContents>
          {props.fetchBoard?.fetchBoard?.contents}
          {props.fetchBoard?.fetchBoard?.youtubeUrl && (
            <S.Youtube url={props.fetchBoard?.fetchBoard?.youtubeUrl} rel={0} />
          )}
        </S.DetailContents>
        <S.UpDownGroup>
          <S.UpDown>
            <img
              src="/images/up.svg"
              alt="좋아요"
              onClick={props.onClickLike}
            />
            <span>{props.fetchBoard?.fetchBoard?.likeCount}</span>
          </S.UpDown>
          <S.UpDown>
            <img
              src="/images/down.svg"
              alt="싫어요"
              onClick={props.onClickDislike}
            />
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
