import { CommentTitle } from "./boardCommentWrite.style";
import { IBoardCommentWriteUI } from "./boardCommentWrite.types";
import BoardCommentWriteItem from "../item/write/boardCommentWriteItem.container";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUI) {
  return (
    <>
      <CommentTitle>
        <img src="/images/comment.svg" alt="댓글아이콘" />
        <span>댓글</span>
      </CommentTitle>
      <BoardCommentWriteItem
        isEdit={false}
        commentLength={props.commentLength}
        commentRating={props.commentRating}
        onChangeCommentContents={props.onChangeCommentContents}
        onChangeCommentWriter={props.onChangeCommentWriter}
        onChangeCommentPassword={props.onChangeCommentPassword}
        onClickComment={props.onClickCreateComment}
        onChangeRating={props.onChangeRating}
      />
    </>
  );
}
