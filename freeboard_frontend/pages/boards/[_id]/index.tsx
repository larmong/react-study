import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWriteUI from "../../../src/components/units/boardComment/write/boardCommentWrite.container";
import BoardCommentListUI from "../../../src/components/units/boardComment/list/boardCommentList.container";

export default function BoardsDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWriteUI />
      <BoardCommentListUI />
    </>
  );
}
