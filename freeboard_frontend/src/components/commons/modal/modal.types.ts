import { CustomMouseEvent } from "../../units/board/list/BoardList.types";

export interface IModalComponentUI {
  isModal: boolean;
  modalContents: any;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
  modalToggle: () => void;
}
