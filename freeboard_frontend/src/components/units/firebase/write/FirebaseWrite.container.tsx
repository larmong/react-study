import { useRouter } from "next/router";
import { addDoc, doc, updateDoc } from "@firebase/firestore";
import BoardWriteUI from "./FirebaseWrite.presenter";
import PostcodeModalComponent from "../../../commons/postcodeModal/postcodeModal.container";
import { useState, ChangeEvent } from "react";
import { CustomMouseEvent } from "../list/FirebaseList.types";
import moment from "moment";
import {
  IFirebaseEditVariables,
  IPropsFirebaseWrite,
} from "./FirebaseWrite.types";
import { boardsCollectionRef } from "../../../../commons/libraries/firebase/firebase.collection";
import { db } from "../../../../commons/libraries/firebase/firebase.config";

export default function FirebaseWrite(props: IPropsFirebaseWrite) {
  const router = useRouter();

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");

  const [writerError, setWriterError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [contentsError, setContentsError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");

  const [isModal, setIsModal] = useState<boolean>(false);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (!writer) {
      setWriterError("");
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (!password) {
      setPasswordError("");
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (!title) {
      setTitleError("");
    }
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (!contents) {
      setContentsError("");
    }
  }
  function onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
    if (!zipcode && !address && addressDetail) {
      setAddressError("");
    }
  }
  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("🚫 작성자를 입력해주세요! 🚫");
    }
    if (!password) {
      setPasswordError("🚫 비밀번호를 입력해주세요! 🚫");
    }
    if (!title) {
      setTitleError("🚫 제목을 입력해주세요! 🚫");
    }
    if (!contents) {
      setContentsError("🚫 내용을 입력해주세요! 🚫");
    }
    if (!zipcode && !address && addressDetail) {
      setAddressError("🚫 주소를 입력해주세요! 🚫");
    }
    if (writer && password && title && contents) {
      try {
        const result = await addDoc(boardsCollectionRef, {
          writer: writer,
          password: password,
          title: title,
          contents: contents,
          youtubeUrl: youtubeUrl,
          boardAddress: {
            zipcode: zipcode,
            address: address,
            addressDetail: addressDetail,
          },
          createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        });

        alert("게시글이 등록되었습니다! 🥳");
        router.push(`/firebase/${result.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onClickMoveToEdit = async () => {
    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode
    ) {
      alert("🚫 수정한 내용이 없습니다. 🚫");
      return;
    }
    if (!password) {
      setPasswordError("🚫 비밀번호를 입력해주세요! 🚫");
      alert("🚫 비밀번호를 입력해주세요! 🚫");
      return;
    }
    if (password) {
      const editVariables: IFirebaseEditVariables = {};
      if (title) editVariables.title = title;
      if (contents) editVariables.contents = contents;
      if (youtubeUrl) editVariables.contents = youtubeUrl;
      if (zipcode || address || addressDetail) {
        editVariables.boardAddress = {};
        if (zipcode) editVariables.boardAddress.zipcode = zipcode;
        if (address) editVariables.boardAddress.address = address;
        if (addressDetail)
          editVariables.boardAddress.addressDetail = addressDetail;
      }

      const updateBoard = async () => {
        const boardDoc = doc(db, "board", String(router.query.id));
        const updateData = {
          updateBoardInput: editVariables,
          password: password,
        };
        await updateDoc(boardDoc, updateData);
      };
      void updateBoard();
      alert("게시글이 수정되었습니다! 🥳");
      router.push(`/firebase/${router.query.id}`);
    }
  };

  const onClickMoveToList = () => {
    router.push(`/firebase/${router.query.id}`);
  };

  const modalToggle = () => {
    setIsModal((prev: boolean) => !prev);
  };

  const modalCurrentTarget = (event: CustomMouseEvent) => {
    if (isModal && event.target === event.currentTarget) {
      modalToggle();
    }
  };

  const handleComplete = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    modalToggle();
  };

  return (
    <>
      <BoardWriteUI
        writer={writer}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        addressError={addressError}
        zipcode={zipcode}
        address={address}
        addressDetail={addressDetail}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeAddress={onChangeAddress}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        modalToggle={modalToggle}
        onClickSubmit={onClickSubmit}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickMoveToList={onClickMoveToList}
        isEdit={props.isEdit}
        fetchBoard={props.fetchBoard}
      />
      <PostcodeModalComponent
        isModal={isModal}
        modalCurrentTarget={modalCurrentTarget}
        modalToggle={modalToggle}
        handleComplete={handleComplete}
      />
    </>
  );
}
