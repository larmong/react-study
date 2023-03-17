import { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalCustomAddressPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // refactoring => 결과는 똑같지만 코드를 효율적으로 바꿔주는것!
  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    console.log(data);
    console.log(fullAddress);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>주소 입력 !!!</button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법 (ex. 이력서 등) */}
      <Modal open={isModalOpen} onOk={onToggleModal} onCancel={onToggleModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법 (ex. 신용카드, 비밀번호 등) */}
      {isModalOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
