import * as S from "./boardCommentListItem.style";
import { getMyDate } from "../../../../../commons/utils/utils";
import { IBoardCommentItemUI } from "./boardCommentListItem.types";
import BoardCommentWriteItem from "../write/boardCommentWriteItem.container";

export default function BoardCommentItemUI(props: IBoardCommentItemUI) {
  return (
    <div>
      {!props.isEdit && (
        <S.Comment>
          <S.ProfilePicture src="/images/profile.svg" alt="프로필사진" />
          <S.ProfileContents>
            <S.CommentGroup>
              <S.CommentWrite>{props.el.writer}</S.CommentWrite>
              <S.CommentScore
                disabled
                allowHalf
                defaultValue={props.el.rating}
              />
            </S.CommentGroup>
            <S.CommentContents>{props.el.contents}</S.CommentContents>
            <S.CommentDate>{getMyDate(props.el.createdAt)}</S.CommentDate>
          </S.ProfileContents>
          <S.EditGroup>
            <img
              src="/images/pencil.svg"
              alt="수정"
              id={props.el._id}
              onClick={props.onClickIsEdit}
            />
            <img
              src="/images/clear.svg"
              alt="삭제"
              id={props.el._id}
              onClick={props.modalToggle}
            />
          </S.EditGroup>
        </S.Comment>
      )}
      {props.isEdit && (
        <BoardCommentWriteItem
          isEdit={props.isEdit}
          commentLength={props.commentLength}
          commentRating={props.commentRating}
          onChangeCommentContents={props.onChangeCommentContents}
          onChangeCommentPassword={props.onChangeCommentPassword}
          onChangeRating={props.onChangeRating}
          onClickIsEdit={props.onClickCommentEdit}
        />
      )}
    </div>
  );
}
