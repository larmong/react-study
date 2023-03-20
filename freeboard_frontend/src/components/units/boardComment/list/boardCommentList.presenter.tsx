import * as S from "./boardCommentList.style";
import { IBoardCommentListUI } from "./boardCommentList.types";
import { getMyDate } from "../../../../commons/utils/utils";

export default function BoardCommentListUI(props: IBoardCommentListUI) {
  return (
    <>
      {props.fetchBoardComments?.fetchBoardComments.map((el) => (
        <S.Comment key={el._id}>
          <S.ProfilePicture src="/images/profile.svg" alt="프로필사진" />
          <S.ProfileContents>
            <S.CommentGroup>
              <S.CommentWrite>{el.writer}</S.CommentWrite>
              <S.CommentScore disabled allowHalf defaultValue={el.rating} />
            </S.CommentGroup>
            <S.CommentContents>{el.contents}</S.CommentContents>
            <S.CommentDate>{getMyDate(el.createdAt)}</S.CommentDate>
          </S.ProfileContents>
          <S.EditGroup>
            <img src="/images/pencil.svg" alt="수정" />
            <img
              onClick={props.modalToggle}
              id={el._id}
              src="/images/clear.svg"
              alt="삭제"
            />
          </S.EditGroup>
        </S.Comment>
      ))}
    </>
  );
}
