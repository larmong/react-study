import { useState } from "react";
import { IBoardReturn } from "../../../commons/types/generated/types";
import styled from "@emotion/styled";

interface IProps {
  el: IBoardReturn;
}
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

export default function BoardCommentItem(props: IProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <div>
      {!isEdit && (
        <Row>
          <Column>{props.el.writer}</Column>
          <Column>{props.el.title}</Column>
          <ColumnBtn onClick={onClickEdit}>수정하기</ColumnBtn>
        </Row>
      )}
      {isEdit && (
        <div>
          수정할 내용: <input type="text" />
        </div>
      )}
    </div>
  );
}
