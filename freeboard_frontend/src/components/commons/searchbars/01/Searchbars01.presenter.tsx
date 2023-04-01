import { ISearchbars01UIProps } from "./Searchbars01.types";
import * as S from "./Searchbars01.style";

export default function Searchbars01UI(props: ISearchbars01UIProps) {
  return (
    <S.SearchItemBox>
      <S.SearchIcon src="/images/search.svg" alt="검색" />
      <S.SearchItem
        type="text"
        placeholder="제목을 검색해주세요."
        onChange={props.onChangeSearchbar}
      />
    </S.SearchItemBox>
  );
}
