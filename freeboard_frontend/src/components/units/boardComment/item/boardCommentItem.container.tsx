import { IBoardCommentItem } from "./boardCommentItem.types";
import BoardCommentItemUI from "./boardCommentItem.presenter";

export default function BoardCommentItem(props: IBoardCommentItem) {
  return <BoardCommentItemUI el={props.el} modalToggle={props.modalToggle} />;
}
