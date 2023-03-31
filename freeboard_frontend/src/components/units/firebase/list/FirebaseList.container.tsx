import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { CustomMouseEvent } from "./FirebaseList.types";
import FirebaseListUI from "./FirebaseList.presenter";
import { boardsCollectionRef } from "../../../../commons/libraries/firebase/firebase.collection";

export default function FirebaseList() {
  const router = useRouter();
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
