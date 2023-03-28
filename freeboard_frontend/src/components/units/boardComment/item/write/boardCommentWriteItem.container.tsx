import { IBoardCommentWriteItem } from "./boardCommentWriteItem.types";
import BoardCommentWriteItemUI from "./boardCommentWriteItem.presenter";

export default function BoardCommentWriteItem({
  data,
  isEdit,
  commentLength,
  commentRating,
  commentPassword,
  commentWriter,
  commentContents,
  onChangeCommentContents,
  onChangeCommentWriter,
  onChangeCommentPassword,
  onClickComment,
  onChangeRating,
  onClickIsEdit,
}: IBoardCommentWriteItem) {
  return (
    <BoardCommentWriteItemUI
      data={data}
      isEdit={isEdit}
      commentLength={commentLength}
      commentRating={commentRating}
      commentPassword={commentPassword}
      commentWriter={commentWriter}
      commentContents={commentContents}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickComment={onClickComment}
      onClickIsEdit={onClickIsEdit}
      onChangeRating={onChangeRating}
    />
  );
}
