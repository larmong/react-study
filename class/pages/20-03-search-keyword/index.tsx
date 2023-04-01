import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";
import { debounce } from "lodash";
export type CustomMouseEvent = MouseEvent<HTMLElement>;
import { v4 as uuidv4 } from "uuid";

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
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: CustomMouseEvent) => {
    void refetch({ page: Number(event.currentTarget.id) });
    console.log(event.currentTarget.id);
  };

  // debounce(debouncing) - 마지막 입력을 기준으로 특정 시간 이내에 추가 입력이 없으면 1번 실행하는 것   ===>  마지막 한 번 요청 / 검색 디바운싱
  // throttle(throttling) - 최초 입력을 기준으로 특정 시간 이내에 발생한 추가 입력을 무시하는 것        ===>  먼저 한 번 요청 / 무한 스크롤

  const getDebounce = debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 500);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return (
    <>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards?.map((el) => (
        <Row key={el.number}>
          <Column>{el.writer}</Column>
          <Column>
            {el.title
              ?.replaceAll(keyword, `$%!@#${keyword}$%!@#`)
              .split("$%!@#")
              .map((el) => (
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "#333" }}
                >
                  {el}
                </span>
              ))}
          </Column>
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
