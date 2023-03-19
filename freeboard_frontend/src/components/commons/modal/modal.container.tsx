import ModalComponentUI from "./modal.presenter";
import { useState } from "react";
import { CustomMouseEvent } from "../../units/board/list/BoardList.types";

export default function BoardCommentList() {
  const [isModal, setIsModal] = useState<boolean>(true);
  const [modalContents, setModalContents] = useState<string>("");

  const modalToggle = () => {
    setIsModal((prev: boolean) => !prev);
  };
  const modalCurrentTarget = (event: CustomMouseEvent) => {
    if (isModal && event.target === event.currentTarget) {
      modalToggle();
    }
  };

  return (
    <ModalComponentUI
      isModal={isModal}
      modalContents={modalContents}
      modalToggle={modalToggle}
      modalCurrentTarget={modalCurrentTarget}
    />
  );
}
