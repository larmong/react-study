import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";
export type CustomMouseEvent = MouseEvent<HTMLButtonElement>;

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
  align-items: center;
`;
const Column = styled.div`
  font-size: 20px;
  width: 40%;
  height: 40px;
  border-bottom: 1px solid #bdbdbd;
  line-height: 40px;
`;
const ColumnBtn = styled.button`
  width: 20%;
  height: 40px;
`;

export default function CommentEditPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [editId, setEditId] = useState([
    false, // index0
    false, // index1
    false, // index2
    false, // index3
    false, // index4
    false, // index5
    false, // index6
    false, // index7
    false, // index8
    false, // index9
  ]);

  const onClickEdit = (event: CustomMouseEvent) => {
    const copyEditId = [...editId];
    copyEditId[Number(event.currentTarget.id)] = true;
    console.log(editId);
    setEditId(copyEditId);
  };
  return (
    <>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el.number}>
          {editId[index] === false && (
            <Row>
              <Column>{el.writer}</Column>
              <Column>{el.title}</Column>
              <ColumnBtn id={String(index)} onClick={onClickEdit}>
                수정하기
              </ColumnBtn>
            </Row>
          )}
          {editId[index] === true && (
            <div>
              수정할 내용: <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
