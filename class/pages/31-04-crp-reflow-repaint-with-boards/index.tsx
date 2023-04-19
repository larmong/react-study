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
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardsPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickPage = (event: CustomMouseEvent) => {
    void refetch({ page: Number(event.currentTarget.id) });
    console.log(event.currentTarget.id);
  };
  return (
    // 임시 배열 10개를 생성하여, 데이터가 없을 떄도 높이 30px을 유지하여 reflow 방지
    // style={{ height: "30px" }} => 리플로우 방지
    // ex) 구글 이미지 검색
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id} style={{ height: "30px" }}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
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
