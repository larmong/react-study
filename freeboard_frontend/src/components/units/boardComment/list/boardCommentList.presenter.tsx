import { IBoardCommentListUI } from "./boardCommentList.types";
import { CommentListContainer } from "./boardCommentList.style";
import BoardCommentItem from "../item/boardCommentItem.container";

export default function BoardCommentListUI(props: IBoardCommentListUI) {
  return (
    <CommentListContainer>
      {props.fetchBoardComments?.fetchBoardComments.map((el) => (
        <BoardCommentItem
          key={el._id}
          el={el}
          modalToggle={props.modalToggle}
        />
      ))}
    </CommentListContainer>
  );
}
