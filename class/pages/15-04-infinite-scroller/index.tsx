import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent } from "react";
export type CustomMouseEvent = MouseEvent<HTMLElement>;
import InfiniteScroll from "react-infinite-scroller";

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
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onFetchMore = () => {
    if (data?.fetchBoards?.length === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards?.length / 10) + 1 },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onFetchMore} hasMore={true}>
        {data?.fetchBoards?.map((el) => (
          <Row key={el.number}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
          </Row>
        )) ?? <div></div>}
      </InfiniteScroll>
    </>
  );
}
