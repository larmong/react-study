import * as S from "./BoardList.style";
import { getMyDate } from "../../../../commons/utils/utils";
import { IPropsBoardListUI } from "./BoardList.types";
import Pagination01 from "../../../commons/pagination/ver1/Pagination01.container";

export default function BoardListUI(props: IPropsBoardListUI) {
  return (
    <S.Wrapper>
      <S.PageTitle>베스트 게시글</S.PageTitle>
      <S.CardContainer>
        {props.fetchBoardsOfTheBest?.fetchBoardsOfTheBest.map((el, index) => (
          <S.BestBoardCard key={el._id}>
            <img
              src={`/images/bestSample${index + 1}.png`}
              alt="프리뷰이미지"
            />
            <S.BestBoardCardContents>
              <h5 onClick={props.onClickMoveToDetail} id={el._id}>
                {el.title}
              </h5>
              <div>
                <S.BestBoardCardProfile>
                  <div>
                    <img src="/images/profile.svg" alt="프로필사진" />
                    <h6>{el.writer}</h6>
                  </div>
                  <p>
                    Date : <span>{getMyDate(el.createdAt)}</span>
                  </p>
                </S.BestBoardCardProfile>
                <S.BestBoardCardUp>
                  <img src="/images/up.svg" alt="좋아요" />
                  <span>{el.likeCount}</span>
                </S.BestBoardCardUp>
              </div>
            </S.BestBoardCardContents>
          </S.BestBoardCard>
        ))}
      </S.CardContainer>
      <S.SearchItemGroup>
        <S.SearchItemBox>
          <S.SearchIcon src="/images/search.svg" alt="검색" />
          <S.SearchItem type="text" placeholder="제목을 검색해주세요." />
        </S.SearchItemBox>
        <S.DateItem type="text" placeholder="YYYY. MM.DD ~ YYYY. MM.DD" />
        <S.BlackBtn>검색하기</S.BlackBtn>
      </S.SearchItemGroup>
      <S.Table>
        <S.RowTitle>
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
        </S.RowTitle>
        {props.fetchBoards?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <span>{index + 1}</span>
            <span>
              <S.ColumnTitle onClick={props.onClickMoveToDetail} id={el._id}>
                {el.title}
              </S.ColumnTitle>
            </span>
            <span>
              <S.ColumnWriter>{el.writer}</S.ColumnWriter>
            </span>
            <span>{getMyDate(el.createdAt)}</span>
          </S.Row>
        ))}
      </S.Table>
      <S.BoardListBottom>
        <Pagination01 refetch={props.refetch} totalPage={props.totalPage} />
        <S.NewBoardBtn onClick={props.onClickMoveToNew}>
          <img src="/images/create.svg" alt="게시물등록" />
          게시물 등록하기
        </S.NewBoardBtn>
      </S.BoardListBottom>
    </S.Wrapper>
  );
}
