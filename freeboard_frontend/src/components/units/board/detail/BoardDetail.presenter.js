import * as S from "./BoardDetail.style";
import {getMyDate} from "../../../../commons/utils/utils";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.DetailTop>
          <S.Profile>
            <img src="/profile.svg" alt="프로필사진"/>
            <div>
              <h6>{props.data?.fetchBoard?.writer}</h6>
              <p>Date : <span>{getMyDate(props.data?.fetchBoard?.createdAt)}</span></p>
            </div>
          </S.Profile>
          <S.IconGroup>
            <img src="/share.svg" alt="공유아이콘"/>
            <img onClick={props.onClickLocation} src="/location.svg" alt="위치아이콘"/>
            {
              props.locationInfo == true
                ? <S.LocationInfo>
                  서울특별시 영등포구 양산로 200<br />
                  (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
                </S.LocationInfo>
                : null
            }
          </S.IconGroup>
        </S.DetailTop>

        <S.Line></S.Line>
        <S.DetailTitle>{props.data?.fetchBoard?.title}</S.DetailTitle>
        <S.DetailImages src="/sample.png" alt="샘플이미지"/>
        <S.DetailContents>{props.data?.fetchBoard?.contents}</S.DetailContents>
        <S.UpDownGroup>
          <S.UpDown><img src="/up.svg" alt="좋아요"/><span>1920</span></S.UpDown>
          <S.UpDown><img src="/down.svg" alt="싫어요"/><span>231</span></S.UpDown>
        </S.UpDownGroup>
      </S.Container>
      <S.DetailCenter>
        <S.BtnGroup>
          <S.BorderBtn onClick={props.onClickMoveToList}>목록으로</S.BorderBtn>
          <S.BorderBtn onClick={props.onClickMoveToEdit}>수정하기</S.BorderBtn>
          <S.BorderBtn onClick={props.onClickDelete}>삭제하기</S.BorderBtn>
        </S.BtnGroup>
      </S.DetailCenter>
      <S.Line></S.Line>
      <S.DetailBottom>
        <S.CommentTitle>
          <img src="/comment.svg" alt="댓글아이콘"/>
          <span>댓글</span>
        </S.CommentTitle>
        <S.CommentCreate>
          <S.CommentCreateInfo>
            <S.CommentCreateInput type="text" placeholder="작성자" />
            <S.CommentCreateInput type="password" placeholder="비밀번호" />
            <S.CommentCreateScore>
              <img src="/star.svg" alt="스코어"/>
              <img src="/star.svg" alt="스코어"/>
              <img src="/star.svg" alt="스코어"/>
              <img src="/star.svg" alt="스코어"/>
              <img src="/star.svg" alt="스코어"/>
            </S.CommentCreateScore>
          </S.CommentCreateInfo>
          <S.CommentCreateContents>
            <S.CommentCreateText placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
            <S.CommentCreateBtn>
              <span>0/100</span>
              <button>등록하기</button>
            </S.CommentCreateBtn>
          </S.CommentCreateContents>
        </S.CommentCreate>
        <S.CommentContainer>
          <S.Comment>
            <S.CommentProfile>
              <img src="/profile.svg" alt="프로필사진"/>
              <div>
                <S.CommentProfileNameScore>
                  <h6>홍길동</h6>
                  <S.CommentCreateScore>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/star.svg" alt="스코어"/>
                  </S.CommentCreateScore>
                </S.CommentProfileNameScore>
                <p>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</p>
                <span>2021.02.22</span>
              </div>
            </S.CommentProfile>
            <S.EditGroup>
              <img src="/pencil.svg" alt="아이콘"/>
              <img src="/clear.svg" alt="아이콘"/>
            </S.EditGroup>
          </S.Comment>
          <S.Comment>
            <S.CommentProfile>
              <img src="/profile.svg" alt="프로필사진"/>
              <div>
                <S.CommentProfileNameScore>
                  <h6>이루이</h6>
                  <S.CommentCreateScore>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/star.svg" alt="스코어"/>
                  </S.CommentCreateScore>
                </S.CommentProfileNameScore>
                <p>진짜 좋네요~ 감사합니다~!</p>
                <span>2021.02.22</span>
              </div>
            </S.CommentProfile>
            <S.EditGroup>
              <img src="/pencil.svg" alt="아이콘"/>
              <img src="/clear.svg" alt="아이콘"/>
            </S.EditGroup>
          </S.Comment>
          <S.Comment>
            <S.CommentProfile>
              <img src="/profile.svg" alt="프로필사진"/>
              <div>
                <S.CommentProfileNameScore>
                  <h6>한루이</h6>
                  <S.CommentCreateScore>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/starActive.svg" alt="스코어"/>
                    <img src="/star.svg" alt="스코어"/>
                  </S.CommentCreateScore>
                </S.CommentProfileNameScore>
                <p>앞으로도 좋은 정보 부탁드립니다~!</p>
                <span>2021.02.22</span>
              </div>
            </S.CommentProfile>
            <S.EditGroup>
              <img src="/pencil.svg" alt="아이콘"/>
              <img src="/clear.svg" alt="아이콘"/>
            </S.EditGroup>
          </S.Comment>
        </S.CommentContainer>
      </S.DetailBottom>
    </S.Wrapper>
  )
}
