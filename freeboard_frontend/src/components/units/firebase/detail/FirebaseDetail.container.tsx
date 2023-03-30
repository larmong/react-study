import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardDetailUI from "./FirebaseDetail.presenter";
import { db } from "../../../../commons/libraries/firebase";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

export default function FirebaseDetail() {
  const router = useRouter();
  const boardId = String(router.query.id);
  const [fetchBoard, setFetchBoard] = useState<any>();

  console.log(boardId);

  useEffect(() => {
    const fetchBoards = async () => {
      if (boardId) {
        const result = await getDocs(
          query(collection(db, "boards"), where(documentId(), "==", boardId))
        );
        const board = result.docs.map((el) => el.data());
        setFetchBoard(board[0]);
      }
    };
    void fetchBoards();
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
