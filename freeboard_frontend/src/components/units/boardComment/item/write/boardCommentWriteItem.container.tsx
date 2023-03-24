import { IBoardCommentWriteItem } from "./boardCommentWriteItem.types";
import BoardCommentWriteItemUI from "./boardCommentWriteItem.presenter";

export default function BoardCommentWriteItem({
  isEdit,
  commentLength,
  commentRating,
  onChangeCommentContents,
  onChangeCommentWriter,
  onChangeCommentPassword,
  onClickComment,
  onChangeRating,
  onClickIsEdit,
}: IBoardCommentWriteItem) {
  return (
    <BoardCommentWriteItemUI
      isEdit={isEdit}
      commentLength={commentLength}
      commentRating={commentRating}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickComment={onClickComment}
      onClickIsEdit={onClickIsEdit}
      onChangeRating={onChangeRating}
    />
  );
}
