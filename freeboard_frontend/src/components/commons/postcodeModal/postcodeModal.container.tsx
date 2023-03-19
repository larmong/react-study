import { IPostcodeModalComponentUI } from "./postcodeModal.types";
import PostcodeModalComponentUI from "./postcodeModal.presenter";

export default function PostcodeModalComponent({
  isModal,
  modalCurrentTarget,
  modalToggle,
  handleComplete,
}: IPostcodeModalComponentUI) {
  return (
    <PostcodeModalComponentUI
      isModal={isModal}
      modalCurrentTarget={modalCurrentTarget}
      modalToggle={modalToggle}
      handleComplete={handleComplete}
    />
  );
}
