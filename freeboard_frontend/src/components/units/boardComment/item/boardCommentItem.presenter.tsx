import * as S from "./boardCommentItem.style";
import { getMyDate } from "../../../../commons/utils/utils";
import { IBoardCommentItemUI } from "./boardCommentItem.types";

export default function BoardCommentItemUI(props: IBoardCommentItemUI) {
  return (
    <S.Comment>
      <S.ProfilePicture src="/images/profile.svg" alt="프로필사진" />
      <S.ProfileContents>
        <S.CommentGroup>
          <S.CommentWrite>{props.el.writer}</S.CommentWrite>
          <S.CommentScore disabled allowHalf defaultValue={props.el.rating} />
        </S.CommentGroup>
        <S.CommentContents>{props.el.contents}</S.CommentContents>
        <S.CommentDate>{getMyDate(props.el.createdAt)}</S.CommentDate>
      </S.ProfileContents>
      <S.EditGroup>
        <img src="/images/pencil.svg" alt="수정" />
        <img
          onClick={props.modalToggle}
          id={props.el._id}
          src="/images/clear.svg"
          alt="삭제"
        />
      </S.EditGroup>
    </S.Comment>
  );
}
