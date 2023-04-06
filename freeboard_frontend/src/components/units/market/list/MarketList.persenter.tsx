import * as S from "./MarketList.style";
import { IPropsMarketListUI } from "./MarketList.types";
import { IUseditem } from "../../../../commons/types/generated/types";

export default function MarketListUI(props: IPropsMarketListUI) {
  return (
    <S.Wrapper>
      <S.PageTitle>베스트 상품</S.PageTitle>
      <S.BestContainer>
        {props.bestItem?.fetchUseditemsOfTheBest.map((el) => (
          <S.BestItem key={el._id}>
            <S.BestItemImg
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
            />
            <S.BestItemContents>
              {/* prettier-ignore */}
              <S.BestItemInfo>
                  <S.BestItemName onClick={props.onClickToDetail(el._id)}>{el.name}</S.BestItemName>
                  <S.BestItemRemarks>{el.remarks}</S.BestItemRemarks>
                  <S.BestItemPrice>{el.price}원</S.BestItemPrice>
              </S.BestItemInfo>
              <S.BestPickIcon>
                <S.BestIcon src="/images/favorite.svg" alt="좋아요" />
                <S.BestCount>{el.pickedCount}</S.BestCount>
              </S.BestPickIcon>
            </S.BestItemContents>
          </S.BestItem>
        ))}
      </S.BestContainer>
      <S.SearchContainer>
        <S.ItemState>
          <S.State>판매중상품</S.State>
          <S.State>판매된상품</S.State>
        </S.ItemState>
        <S.ItemSearch>
          <S.SearchBar type="text" placeholder="제품을 검색해주세요." />
          <S.SearchDate type="text" placeholder="YYYY. MM.DD ~ YYYY. MM.DD" />
          <S.SearchBtn>검색</S.SearchBtn>
        </S.ItemSearch>
      </S.SearchContainer>
      <S.Table>
        {props.usedItems?.fetchUseditems.map((el: IUseditem) => (
          <S.Row key={el._id}>
            <S.ItemLeft>
              <S.ItemImg
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
              />
              <S.ItemInfo>
                <S.ItemName onClick={props.onClickToDetail(el._id)}>
                  {el.name}
                </S.ItemName>
                <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
                <S.ItemTags>{el.tags}</S.ItemTags>
                <S.BottomGroup>
                  <S.ItemProfile src="/images/profile.svg" alt="프로필" />
                  <S.ItemSeller>{el.seller?.name}판매자</S.ItemSeller>
                  <S.ItemIcon src="/images/favorite.svg" alt="좋아요" />
                  <S.ItemCount>{el.pickedCount}</S.ItemCount>
                </S.BottomGroup>
              </S.ItemInfo>
            </S.ItemLeft>
            <S.ItemPrice>
              <img src="/images/euro.svg" alt="euro" />
              {el.price}원
            </S.ItemPrice>
          </S.Row>
        ))}
      </S.Table>
      <S.BottomContainer>
        <S.NewItemBtn onClick={props.onClickToNew}>상품 등록하기</S.NewItemBtn>
      </S.BottomContainer>
    </S.Wrapper>
  );
}
