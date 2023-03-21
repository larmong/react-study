import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";
import { spans } from "next/dist/build/webpack/plugins/profiling-plugin";
export type CustomMouseEvent = MouseEvent<HTMLElement>;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Column = styled.div`
  font-size: 20px;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #bdbdbd;
  line-height: 40px;
`;

export default function MapBoardsPage() {
  const [startPage, setStatPage] = useState(1);

  const { data: fetchBoards, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: fetchBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);

  const onClickPage = (event: CustomMouseEvent) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  // const totalPage = Number(fetchBoardsCount?.fetchBoardsCount);
  // const lastPage = fetchBoardsCount ? Math.ceil(totalPage / 10) : 0;
  const lastPage = 13;

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStatPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStatPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <>
      {fetchBoards?.fetchBoards?.map((el) => (
        <Row key={el.number}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map(
        (_el, index) =>
          index + startPage <= lastPage && (
            <span
              key={index + startPage}
              style={{ padding: "5px", margin: "10px" }}
              id={String(index + startPage)}
              onClick={onClickPage}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
