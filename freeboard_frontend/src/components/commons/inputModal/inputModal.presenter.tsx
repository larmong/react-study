import * as S from "./inputModal.style";
import { IInputModalComponentUI } from "./inputModal.types";

export default function InputModalComponentUI(props: IInputModalComponentUI) {
  return (
    <>
      {props.isModal && (
        <S.Modal onClick={props.modalCurrentTarget}>
          <S.ModalContainer>
            <S.CloseBtn onClick={props.modalToggle}>X</S.CloseBtn>
            <S.ModalContents>
              <S.InputTitle> {props.modalTitle}</S.InputTitle>
              <S.InputItem
                type={props.inputType}
                placeholder={props.inputPlaceholder}
                onChange={props.onChangeInputValue}
              />
            </S.ModalContents>
            <S.ModalConfirm onClick={props.onClickModalConfirm}>
              확인
            </S.ModalConfirm>
          </S.ModalContainer>
        </S.Modal>
      )}
    </>
  );
}
