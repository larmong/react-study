import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardDetailUI {
  fetchBoard?: Pick<IQuery, "fetchBoard">;
  locationInfo: boolean;
  onClickLocation: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
  onClickDelete: () => void;
}
