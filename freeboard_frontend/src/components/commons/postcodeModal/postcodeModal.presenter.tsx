import * as S from "./postcodeModal.style";
import { IPostcodeModalComponentUI } from "./postcodeModal.types";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function PostcodeModalComponentUI(
  props: IPostcodeModalComponentUI
) {
  return (
    <>
      {props.isModal && (
        <S.Modal onClick={props.modalCurrentTarget}>
          <S.ModalContainer>
            <S.CloseBtn onClick={props.modalToggle}>X</S.CloseBtn>
            <S.ModalContents>
              <S.InputTitle> {props.modalTitle}</S.InputTitle>
              <DaumPostcodeEmbed
                onComplete={props.handleComplete}
                autoClose={false}
              />
            </S.ModalContents>
          </S.ModalContainer>
        </S.Modal>
      )}
    </>
  );
}
