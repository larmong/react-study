import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";
export type CustomMouseEvent = MouseEvent<HTMLElement>;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
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

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: CustomMouseEvent) => {
    void refetch({ page: Number(event.currentTarget.id) }); // 검색에서 refecch할 때, 사용한 search 검색어가 저장되어있는 상태이므로 추가로 search 포함하지 않아도 됨
    console.log(event.currentTarget.id);
  };

  const onClickSearch = () => {
    void refetch({
      page: 1,
      search: search,
    });
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
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
    </>
  );
}
