import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMarketListUI {
  bestItem?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  usedItems?: Pick<IQuery, "fetchUseditems">;
  onClickToDetail: (value: string) => () => void;
  onClickToNew: () => void;
  isSoldOut: boolean;
}

export interface ISearchState {
  isSoldOut?: boolean;
}
