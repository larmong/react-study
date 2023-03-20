import * as S from "./boardCommentWrite.style";
import { IBoardCommentWriteUI } from "./boardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUI) {
  return (
    <>
      <S.CommentTitle>
        <img src="/images/comment.svg" alt="댓글아이콘" />
        <span>댓글</span>
      </S.CommentTitle>
      <S.CommentCreate>
        <S.CommentCreateInfo>
          <S.CommentCreateInput
            type="text"
            onChange={props.onChangeCommentWriter}
            placeholder="작성자"
          />
          <S.CommentCreateInput
            type="password"
            onChange={props.onChangeCommentPassword}
            placeholder="비밀번호"
          />
          <S.CommentCreateScore
            allowHalf
            defaultValue={props.commentRating}
            onChange={props.onChangeRating}
          />
        </S.CommentCreateInfo>
        <S.CommentCreateContents>
          <S.CommentCreateText
            onChange={props.onChangeCommentContents}
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.CommentCreateBtn>
            <span>{props.commentLength}/100</span>
            <button onClick={props.onClickCreateComment}>등록하기</button>
          </S.CommentCreateBtn>
        </S.CommentCreateContents>
      </S.CommentCreate>
    </>
  );
}
