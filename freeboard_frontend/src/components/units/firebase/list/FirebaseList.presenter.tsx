import * as S from "./FirebaseList.style";
import { IFirebaseListUI } from "./FirebaseList.types";
import { getMyDate } from "../../../../commons/utils/utils";

export default function FirebaseListUI(props: IFirebaseListUI) {
  return (
    <S.Wrapper>
      <S.Table>
        <S.RowTitle>
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
        </S.RowTitle>
        {props.fetchBoards?.map((el: any, index: any) => (
          <S.Row key={index}>
            <span>{index + 1}</span>
            <span>
              <S.ColumnTitle onClick={props.onClickMoveToDetail} id={el?.id}>
                {el?.title}
              </S.ColumnTitle>
            </span>
            <span>
              <S.ColumnWriter>{el?.writer}</S.ColumnWriter>
            </span>
            <span>{getMyDate(el?.createdAt)}</span>
          </S.Row>
        ))}
      </S.Table>
      <S.BoardListBottom>
        <S.NewBoardBtn onClick={props.onClickMoveToNew}>
          <img src="/images/create.svg" alt="게시물등록" />
          게시물 등록하기
        </S.NewBoardBtn>
      </S.BoardListBottom>
    </S.Wrapper>
  );
}
