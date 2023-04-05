import * as S from "./MarketDetail.style";
import { IPropsMarketDetailUI } from "./MarketDetail.types";
import { getMyDate } from "../../../../commons/utils/utils";
import { SlideMain } from "./MarketDetail.style";

export default function MarketDetailUI(props: IPropsMarketDetailUI) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.DetailTop>
          <S.Profile>
            <img src="/images/profile.svg" alt="프로필사진" />
            <div>
              <h6>{props.fetchUseditem?.fetchUseditem?.seller?.name}</h6>
              <p>
                Date :{" "}
                <span>
                  {getMyDate(props.fetchUseditem?.fetchUseditem?.createdAt)}
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
                {/*prettier-ignore*/}
                <p>
                  ({props.fetchUseditem?.fetchUseditem?.useditemAddress?.zipcode}) &nbsp;
                  {props.fetchUseditem?.fetchUseditem?.useditemAddress?.address}<br />
                  {props.fetchUseditem?.fetchUseditem?.useditemAddress?.addressDetail}
                </p>
              </S.LocationInfo>
            ) : null}
          </S.IconGroup>
        </S.DetailTop>
        <S.Line></S.Line>
        <S.ItemDetail>
          <S.ItemRemarks>
            {props.fetchUseditem?.fetchUseditem?.remarks}
          </S.ItemRemarks>
          <S.ItemName>{props.fetchUseditem?.fetchUseditem?.name}</S.ItemName>
          <S.ItemPrice>{props.fetchUseditem?.fetchUseditem?.price}</S.ItemPrice>

          <S.ItemSlider>
            {/*사진슬라이드  props.fetchUseditem?.fetchUseditem?.images*/}
            <S.SlideMain
              src={`https://storage.googleapis.com/${props.fetchUseditem?.fetchUseditem?.images?.[0]}`}
            />
          </S.ItemSlider>

          <S.ItemContents>
            {props.fetchUseditem?.fetchUseditem?.contents}
          </S.ItemContents>
          <S.ItemTags>{props.fetchUseditem?.fetchUseditem?.tags}</S.ItemTags>
        </S.ItemDetail>
        <S.Line></S.Line>
        <S.Location>{/* 지도 API 추가 */}</S.Location>
      </S.Container>
      <S.DetailCenter>
        <S.BtnGroup>
          {/* 구매하기(판매자 외 일반 사용자), 수정하기(판매자 일 경우만 보임)  */}
          <S.DisabledBtn onClick={props.onClickToList}>목록으로</S.DisabledBtn>
          <S.ActivateBtn onClick={props.onClickToBuy}>구매하기</S.ActivateBtn>
          {/*<S.ActivateBtn onClick={props.onClickToEdit}>수정하기</S.ActivateBtn>*/}
        </S.BtnGroup>
      </S.DetailCenter>
      <S.Line></S.Line>
    </S.Wrapper>
  );
}
