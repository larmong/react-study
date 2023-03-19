import { ChangeEvent, MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IInputModalComponentUI {
  isModal: boolean;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
  modalToggle: (event: CustomMouseEvent) => void;
  modalTitle: string;
  inputType: string;
  inputPlaceholder: string;
  onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickModalConfirm: () => void;
}
