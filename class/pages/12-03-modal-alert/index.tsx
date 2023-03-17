import { Modal } from "antd";

const success = () => {
  Modal.success({ content: "게시글 등록에 성공했습니다 🥳" });
};

const error = () => {
  Modal.error({ content: "비밀번호가 틀렸습니다 🥲" });
};

export default function ModalAlertPage() {
  return (
    <>
      <button onClick={success}>Success 🥳</button>
      <button onClick={error}>Error 🥲</button>
    </>
  );
}
