import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent } from "react";
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

  // 23-06-function-with-return-function 참고
  const onClickPage = (boardId: number) => () => {
    void refetch({ page: Number(boardId) });
  };
  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}

      {Array(10)
        .fill(1)
        .map((_el, index) => (
          <span
            key={index + 1}
            style={{ padding: "5px", margin: "10px" }}
            onClick={onClickPage(index + 1)}
            // event.target.id 값 넘기지 않고 onClick 함수로 boardId 값을 넘겨줌
          >
            {index + 1}
          </span>
        ))}
    </>
  );
}
