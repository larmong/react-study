import ModalComponentUI from "./modal.presenter";
import { IModalComponentUI } from "./modal.types";

export default function ModalComponent({
  isModal,
  modalContents,
  modalToggle,
  modalCurrentTarget,
}: IModalComponentUI) {
  return (
    <ModalComponentUI
      isModal={isModal}
      modalContents={modalContents}
      modalToggle={modalToggle}
      modalCurrentTarget={modalCurrentTarget}
    />
  );
}

// const [isModal, setIsModal] = useState<boolean>(true);
// const [modalContents, setModalContents] = useState<string>("");
//
// const modalToggle = () => {
//   setIsModal((prev: boolean) => !prev);
// };
// const modalCurrentTarget = (event: CustomMouseEvent) => {
//   if (isModal && event.target === event.currentTarget) {
//     modalToggle();
//   }
// };
