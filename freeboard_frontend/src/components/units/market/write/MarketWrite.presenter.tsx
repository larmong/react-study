import * as S from "./MarketWrite.style";
import { IPropsMarketWriteUI } from "./MarketWrite.types";
import Uploads02 from "../../../commons/uploads/02/Uploads02.container";

export default function MarketWriteUI(props: IPropsMarketWriteUI) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.Container>
        <S.PageTitle>상품 {props.isEdit ? "수정" : "등록"}하기</S.PageTitle>
        <S.Group>
          <S.InputTitle>상품명</S.InputTitle>
          <S.InputItem
            id="name"
            type="text"
            placeholder="상품명을 작성해주세요."
            onChange={props.onChangeMarketItems}
            defaultValue={props.data?.fetchUseditem.name}
          />
        </S.Group>
        <S.Group>
          <S.InputTitle>한줄요약</S.InputTitle>
          <S.InputItem
            id="remarks"
            type="text"
            placeholder="상품 설명을 한줄로 요약해서 작성해주세요."
            onChange={props.onChangeMarketItems}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
        </S.Group>
        <S.Group>
          <S.InputTitle>내용</S.InputTitle>
          <S.TextItem
            id="contents"
            placeholder="상품을 설명해주세요."
            onChange={props.onChangeMarketItems}
            defaultValue={props.data?.fetchUseditem.contents}
          />
        </S.Group>
        <S.Group>
          <S.InputTitle>판매가격</S.InputTitle>
          <S.InputItem
            id="price"
            type="text"
            placeholder="판매 가격을 입력해주세요."
            onChange={props.onChangeMarketItems}
            defaultValue={String(props.data?.fetchUseditem.price)}
          />
        </S.Group>
        <S.Group>
          <S.InputTitle>태그입력</S.InputTitle>
          <S.InputItem
            id="tags"
            type="text"
            placeholder="#태그 #태그 #태그"
            onChange={props.onChangeMarketItems}
            // defaultValue={props.data?.fetchUseditem.tags}
          />
        </S.Group>
        <S.LocationGroup>
          <S.Map>
            <S.InputTitle>거래위치</S.InputTitle>
            <S.MapAPI>카카오 지도 API</S.MapAPI>
          </S.Map>
          <S.Location>
            <S.GPS>
              <S.InputTitle>GPS</S.InputTitle>
              <div>
                <S.MapBtn>위도(LAT)</S.MapBtn>
                <S.MapImg src="/images/location.svg" alt="location" />
                <S.MapBtn>경도(LNG)</S.MapBtn>
              </div>
            </S.GPS>
            <div>
              <S.InputTitle>주소</S.InputTitle>
              <S.InputItem type="text" />
              <S.InputItem type="text" />
            </div>
          </S.Location>
        </S.LocationGroup>
        <S.Group>
          <S.InputTitle>사진 첨부</S.InputTitle>
          <S.UploadList>
            {props.itemUrls.map((el: string, index: number) => (
              <Uploads02
                key={index}
                index={index}
                itemUrl={el}
                onChangeItemUrls={props.onChangeItemUrls}
              />
            ))}
          </S.UploadList>
        </S.Group>
        <S.MainSettingsGroup>
          <S.InputTitle>메인 사진 설정</S.InputTitle>
          <div>
            {props.itemUrls.map((_: string, index: number) => (
              <S.RadioItem key={index}>
                <input
                  type="radio"
                  id={`itemUrls${String(index + 1)}`}
                  name="main"
                />
                <label htmlFor={`itemUrls${String(index + 1)}`}></label>
                <span>사진 {index + 1}</span>
              </S.RadioItem>
            ))}
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
