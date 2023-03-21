import Pagination01UI from "./Pagination01.presenter";
import { useState } from "react";
import { CustomMouseEvent } from "../../../units/board/list/BoardList.types";
import { IPagination01Props } from "./Pagination01.types";

export default function Pagination01(props: IPagination01Props) {
  const [startPage, setStartPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const lastPage =
    props.totalPage != null ? Math.ceil(props.totalPage / 10) : 0;

  const onClickPagination = (event: CustomMouseEvent) => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    setNowPage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev: number) => prev - 10);
    setNowPage((prev: number) => prev - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (lastPage >= startPage + 10) {
      setStartPage((prev: number) => prev + 10);
      setNowPage((prev: number) => prev + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <Pagination01UI
      startPage={startPage}
      nowPage={nowPage}
      lastPage={lastPage}
      onClickPagination={onClickPagination}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
