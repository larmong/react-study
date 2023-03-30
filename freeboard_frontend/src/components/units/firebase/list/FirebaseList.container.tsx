import { firebaseApp } from "../../../../commons/libraries/firebase";
import FirebaseListUI from "./FirebaseList.presenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CustomMouseEvent } from "./FirebaseList.types";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";

export default function FirebaseList() {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchBoards = async () => {
      const board = collection(getFirestore(firebaseApp), "boards");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      const boardsId = result.docs.map((el) => el.id);

      boards.map((obj: any, index: number) => {
        const updatedObj = { ...obj, id: boardsId[index] };
        setDataBoards((prevArray) => [...prevArray, updatedObj]);
      });
    };
    void fetchBoards();
  }, []);

  const onClickMoveToNew = () => {
    router.push(`/firebase/new`);
  };
  const onClickMoveToDetail = (event: CustomMouseEvent) => {
    router.push(`/firebase/${(event.currentTarget as Element).id}`);
  };

  return (
    <FirebaseListUI
      dataBoards={dataBoards}
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
