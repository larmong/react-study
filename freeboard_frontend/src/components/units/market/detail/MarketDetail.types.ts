import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMarketDetailUI {
  fetchUseditem?: Pick<IQuery, "fetchUseditem">;
  isHovering: boolean;
  onMouseOverLocation: () => void;
  onClickToList: () => void;
  onClickToBuy: () => void;
  onClickToEdit: () => void;
}
