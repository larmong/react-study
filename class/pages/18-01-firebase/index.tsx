import { firebaseApp } from "../_app";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";

export default function FirebasePage() {
  const onClickSubmit = () => {
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer: "철수",
      title: "제목입니다.",
      contents: "내용이에요!!",
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const data = result.docs.map((el) => el.data());
    console.log(data);
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조히하기</button>
    </>
  );
}
