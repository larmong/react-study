import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardDetailUI {
  fetchBoard?: Pick<IQuery, "fetchBoard">;
  isHovering: boolean;
  onMouseOverLocation: () => void;
  onClickMoveToEdit: () => void;
  onClickMoveToList: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
