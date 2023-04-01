import { ChangeEvent } from "react";
import { ISearchbars01Props } from "./Searchbars01.types";
import { debounce } from "lodash";
import Searchbars01UI from "./Searchbars01.presenter";

export default function Searchbars01(props: ISearchbars01Props) {
  const getDebounce = debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
