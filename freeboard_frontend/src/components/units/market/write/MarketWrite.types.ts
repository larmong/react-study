import { Scalars } from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IMarketItem {
  name: Scalars["String"];
  remarks: Scalars["String"];
  contents: Scalars["String"];
  price: Scalars["Int"];
}

export interface IPropsMarketWrite {
  isEdit?: boolean;
}

export interface IPropsMarketWriteUI {
  isEdit?: boolean;
  onChangeMarketItems: (event: ChangeEvent<any>) => void;

  onClickMoveToList: () => void;
  onClickMoveToEdit: (event: CustomMouseEvent) => void;
  onClickSubmit: () => void;

  itemUrls: string[];
  onChangeItemUrls: (itemUrl: string, index: number) => void;
}
