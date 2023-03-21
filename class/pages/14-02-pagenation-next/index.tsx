import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";
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
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const [startPage, setStatPage] = useState(1);

  const onClickPage = (event: CustomMouseEvent) => {
    void refetch({ page: Number(event.currentTarget.id) });
    console.log(event.currentTarget.id);
  };

  const onClickPrevPage = () => {
    setStatPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    setStatPage(startPage + 10);
    void refetch({ page: startPage + 10 });
  };

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <Row key={el.number}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_el, index) => (
        <span
          key={index + startPage}
          style={{ padding: "5px", margin: "10px" }}
          id={String(index + startPage)}
          onClick={onClickPage}
        >
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
