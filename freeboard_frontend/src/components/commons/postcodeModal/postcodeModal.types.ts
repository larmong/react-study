import { MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;

export interface IPostcodeModalComponentUI {
  isModal: boolean;
  modalCurrentTarget: (event: CustomMouseEvent) => void;
  modalToggle: (event: CustomMouseEvent) => void;
  handleComplete: (data: any) => void;
}
