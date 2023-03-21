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

  const onClickPage = (event: CustomMouseEvent) => {
    // async / await => refetch 하고 난 다음 무언가 더 해야할 때
    // void => refetch 하고 끝일 때
    void refetch({ page: Number(event.currentTarget.id) });
    console.log(event.currentTarget.id);
  };
  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <Row key={el.number}>
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
            id={String(index + 1)}
            onClick={onClickPage}
          >
            {index + 1}
          </span>
        ))}

      {/*{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (*/}
      {/*  <span*/}
      {/*    key={el}*/}
      {/*    style={{ padding: "5px", margin: "10px" }}*/}
      {/*    id={String(el)}*/}
      {/*    onClick={onClickPage}*/}
      {/*  >*/}
      {/*    {el}*/}
      {/*  </span>*/}
      {/*))}*/}
    </>
  );
}
