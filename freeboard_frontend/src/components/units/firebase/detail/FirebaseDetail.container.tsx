import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { query, getDocs, where, documentId } from "firebase/firestore";
import { boardsCollectionRef } from "../../../../commons/libraries/firebase/firebase.collection";
import BoardDetailUI from "./FirebaseDetail.presenter";

export default function FirebaseDetail() {
  const router = useRouter();
  const boardId: string = String(router.query.id);
  const [fetchBoard, setFetchBoard] = useState({});

  useEffect(() => {
    if (boardId) {
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

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const onMouseOverLocation = () => {
    setIsHovering((prev) => !prev);
  };

  const onClickMoveToList = () => {
    router.push(`/firebase`);
  };
  const onClickMoveToEdit = () => {
    router.push(`/firebase/${router.query.id}/edit`);
  };
  const onClickDelete = async () => {
    alert("게시글이 삭제되었습니다! 😶‍🌫");
    // await deleteBoard({
    //   variables: { boardId: String(router.query.id) },
    // });
    router.push(`/firebase`);
  };

  return (
    <BoardDetailUI
      fetchBoard={fetchBoard}
      isHovering={isHovering}
      onMouseOverLocation={onMouseOverLocation}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
    />
  );
}
