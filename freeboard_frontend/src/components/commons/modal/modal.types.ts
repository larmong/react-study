import { CustomMouseEvent } from "../../units/board/list/BoardList.types";

export interface IModalComponentUI {
  isModal: boolean;
  modalContents: string;
  modalToggle: () => void;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
}
