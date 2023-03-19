import * as S from "./modal.style";
import { IModalComponentUI } from "./modal.types";

export default function ModalComponentUI(props: IModalComponentUI) {
  return (
    <>
      {props.isModal && (
        <S.Modal onClick={props.modalCurrentTarget}>
          <S.ModalContainer>
            <S.CloseBtn onClick={props.modalToggle}>X</S.CloseBtn>
            <S.ModalContents>{props.modalContents}</S.ModalContents>
          </S.ModalContainer>
        </S.Modal>
      )}
    </>
  );
}
