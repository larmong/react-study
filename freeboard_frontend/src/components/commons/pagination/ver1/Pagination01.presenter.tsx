import * as S from "./Pagination01.styles";
import { Pagination01UIProps } from "./Pagination01.types";

export default function Pagination01UI(props: Pagination01UIProps) {
  return (
    <>
      <S.PaginationContainer>
        <S.PagePrevBtn onClick={props.onClickPrevPage}></S.PagePrevBtn>
        <S.Pagination>
          {new Array(10).fill(1).map(
            (_, index) =>
              props.lastPage >= index + props.startPage && (
                <S.Page
                  key={index + props.startPage}
                  id={String(index + props.startPage)}
                  isActive={props.startPage + index === props.nowPage}
                  onClick={props.onClickPagination}
                >
                  {index + props.startPage}
                </S.Page>
              )
          )}
        </S.Pagination>
        <S.PageNextBtn onClick={props.onClickNextPage}></S.PageNextBtn>
      </S.PaginationContainer>
    </>
  );
}
