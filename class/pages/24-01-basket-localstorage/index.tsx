import { gql, useQuery } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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

// type IBaskets = ;

export default function BasketLocalstoragePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickAddBasket = (basket: any) => () => {
    console.log(basket);

    // 1. 기존 장바구니 가져오기
    const baskets: Array<
      Pick<IBoard, "writer" | "contents" | "title" | "_id">[]
    > = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el: any) => el._id === basket._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다 !!");
      return;
    }

    // 3. 해당 장바구니에 담기
    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickAddBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </>
  );
}
