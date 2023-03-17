import { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalCustomAddressPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    console.log(data);
    console.log(fullAddress);
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>주소 입력 !!!</button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법 (ex. 이력서 등) */}
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법 (ex. 신용카드, 비밀번호 등) */}
      {isModalOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
