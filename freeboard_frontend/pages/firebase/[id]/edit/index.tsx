import FirebaseWrite from "../../../../src/components/units/firebase/write/FirebaseWrite.container";
import { useEffect, useState } from "react";
import { documentId, getDocs, query, where } from "firebase/firestore";
import { boardsCollectionRef } from "../../../../src/commons/libraries/firebase/firebase.collection";
import { useRouter } from "next/router";

export default function BoardsEditPage() {
  const router = useRouter();
  const boardId: string = String(router.query.id);
  const [fetchBoard, setFetchBoard] = useState({});

  useEffect(() => {
    if (boardId) {
      console.log(boardId);
      const getBoard = async () => {
        const data = await query(
          boardsCollectionRef,
          where(documentId(), "==", boardId)
        );
        const getBoard = await getDocs(data);
        const result = getBoard.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchBoard(result[0]);
      };
      void getBoard();
    }
  }, [boardId]);

  return <FirebaseWrite isEdit={true} fetchBoard={fetchBoard} />;
}
