import InputModalComponentUI from "./inputModal.presenter";
import { IInputModalComponentUI } from "./inputModal.types";

export default function InputModalComponent({
  isModal,
  modalCurrentTarget,
  modalToggle,
  modalTitle,
  inputType,
  inputPlaceholder,
  onChangeInputValue,
  onClickModalConfirm,
}: IInputModalComponentUI) {
  return (
    <InputModalComponentUI
      isModal={isModal}
      modalCurrentTarget={modalCurrentTarget}
      modalToggle={modalToggle}
      modalTitle={modalTitle}
      inputType={inputType}
      inputPlaceholder={inputPlaceholder}
      onChangeInputValue={onChangeInputValue}
      onClickModalConfirm={onClickModalConfirm}
    />
  );
}
