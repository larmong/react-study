import * as S from "./boardCommentWriteItem.style";
import { IBoardCommentWriteItemUI } from "./boardCommentWriteItem.types";

// props.isEdit=true 일 때만
// [ 댓글 작성자, 댓글 별점, 댓글 내용 가져오기

export default function BoardCommentWriteItemUI(
  props: IBoardCommentWriteItemUI
) {
  return (
    <S.Comment>
      <S.CommentInfo>
        <S.CommentInput
          type="text"
          onChange={props.onChangeCommentWriter}
          placeholder="작성자"
        />
        <S.CommentInput
          type="password"
          onChange={props.onChangeCommentPassword}
          placeholder="비밀번호"
        />
        <S.CommentScore
          allowHalf
          defaultValue={props.commentRating}
          onChange={props.onChangeRating}
        />
      </S.CommentInfo>
      <S.CommentContents>
        <S.CommentText
          onChange={props.onChangeCommentContents}
          maxLength={100}
          value={props.isEdit ? "" : ""}
          placeholder={
            props.isEdit
              ? ""
              : "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          }
        />
        <S.CommentBtnContainer>
          <span>{props.commentLength}/100</span>
          <S.CommentBtn
            onClick={props.isEdit ? props.onClickIsEdit : props.onClickComment}
            isActive={props.isEdit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.CommentBtn>
        </S.CommentBtnContainer>
      </S.CommentContents>
    </S.Comment>
  );
}
