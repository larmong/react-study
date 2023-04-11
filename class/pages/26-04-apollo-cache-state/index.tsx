import { ApolloCache, gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent } from "react";
export type CustomMouseEvent = MouseEvent<HTMLElement>;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardsPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: FETCH_BOARDS }],  ==> refetch 편리한 대신 성능저하 이슈 있음 (작은서비스에서는 좋음)
      update(cache: ApolloCache<any>, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deleteId = data.deleteBoard; // 삭제된 ID
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deleteId // el._id 를 못씀. readField 를 사용해서 _id 꺼내오기
              ); // 삭제된 데이터 뺀 9개의 데이터

              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickCreate = () => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다",
          contents: "내용입니다.",
        },
      },
      update(cache: ApolloCache<any>, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  // cache
  // 유의미한곳: 무한스크롤 포함한 대부분, 큰 프로젝트
  // 무의미한곳 : 게시판(페이지당 10개씩 등), 작은프로젝트

  return (
    <>
      {data?.fetchBoards?.map((el: IBoard) => (
        <div key={el._id}>
          <span style={{ margin: "20px" }}>{el.writer}</span>
          <span style={{ margin: "20px" }}>{el.title}</span>
          <button onClick={onClickDelete(String(el._id))}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
