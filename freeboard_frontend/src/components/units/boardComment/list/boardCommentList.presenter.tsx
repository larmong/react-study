import * as S from "./boardCommentList.style";
import { IBoardCommentListUI } from "./boardCommentList.types";
import { getMyDate } from "../../../../commons/utils/utils";

export default function BoardCommentListUI(props: IBoardCommentListUI) {
  return (
    <>
      {props.fetchBoardComments?.fetchBoardComments.map((el) => (
        <S.Comment key={el._id}>
          <S.CommentProfile>
            <img src="/profile.svg" alt="프로필사진" />
            <div>
              <S.CommentProfileNameScore>
                <h6>{el.writer}</h6>
                <S.CommentScore>
                  <img src="/starActive.svg" alt="스코어" />
                  <img src="/starActive.svg" alt="스코어" />
                  <img src="/starActive.svg" alt="스코어" />
                  <img src="/starActive.svg" alt="스코어" />
                  <img src="/star.svg" alt="스코어" />
                </S.CommentScore>
              </S.CommentProfileNameScore>
              <p>{el.contents}</p>
              <span>{getMyDate(el.createdAt)}</span>
            </div>
          </S.CommentProfile>
          <S.EditGroup>
            <img src="/pencil.svg" alt="수정" />
            <img
              onClick={props.onClickDeleteComment}
              id={el._id}
              src="/clear.svg"
              alt="삭제"
            />
          </S.EditGroup>
        </S.Comment>
      ))}
    </>
  );
}
