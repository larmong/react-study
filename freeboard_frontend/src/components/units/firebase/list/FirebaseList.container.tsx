import { db } from "../../../../commons/libraries/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { CustomMouseEvent } from "./FirebaseList.types";
import FirebaseListUI from "./FirebaseList.presenter";

export default function FirebaseList() {
  const router = useRouter();
  const boardsCollectionRef = collection(db, "boards");
  const [fetchBoards, setFetchBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getBoards = async () => {
      const data = await getDocs(boardsCollectionRef);
      setFetchBoards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    void getBoards();
  }, []);

  const onClickMoveToNew = () => {
    router.push(`/firebase/new`);
  };
  const onClickMoveToDetail = (event: CustomMouseEvent) => {
    router.push(`/firebase/${(event.currentTarget as Element).id}`);
  };

  return (
    <FirebaseListUI
      fetchBoards={fetchBoards}
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
