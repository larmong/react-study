import { Scalars } from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IMarketItem {
  name: Scalars["String"];
  remarks: Scalars["String"];
  contents: Scalars["String"];
  price: Scalars["Int"];
  // tags?: InputMaybe<Array<Scalars["String"]>>;
  // useditemAddress?: InputMaybe<IUseditemAddressInput>;
  // images?: InputMaybe<Array<Scalars["String"]>>;
}

export interface IpropsMarketWrite {
  isEdit?: boolean;
}

export interface IPropsMarketWriteUI {
  isEdit?: boolean;
  onChangeMarketItems: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickMoveToList: () => void;
  onClickMoveToEdit: (event: CustomMouseEvent) => void;
  onClickSubmit: () => void;

  onChangeName: () => void;
  onChangeContents: () => void;
  onChangePrice: () => void;
  onChangeRemarks: () => void;
  onChangeTags: () => void;
}

// export interface IPropsBoardWrite {
//     isEdit: boolean;
//     data?: Pick<IQuery, "fetchBoard">;
// }

// export interface IEditVariables {
//     title?: string;
//     contents?: string;
//     youtubeUrl?: string;
//     boardAddress?: {
//         zipcode?: string;
//         address?: string;
//         addressDetail?: string;
//     };
//     images?: string[];
// }

// export interface IPropsMarketWriteUI {
//   isEdit: boolean;
//   createUseditem: Pick<IMutation, "createUseditem">;
// writer: string;
// writerError: string;
// passwordError: string;
// titleError: string;
// contentsError: string;
// addressError: string;
// zipcode: string;
// address: string;
// addressDetail: string;
// onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
// onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
// onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
// onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
// onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
// onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
// modalToggle: (event: CustomMouseEvent) => void;
// onClickSubmit: () => void;
// onClickMoveToEdit: () => void;
// onClickMoveToList: () => void;
// fileUrls: string[];
// onChangeFileUrls: (fileUrls: string, index: number) => void;
// }
