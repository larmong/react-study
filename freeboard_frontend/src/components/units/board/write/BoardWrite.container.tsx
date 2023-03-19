import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import PostcodeModalComponent from "../../../commons/postcodeModal/postcodeModal.container";
import { IPropsBoardWrite, IEditVariables } from "./BoardWrite.types";
import { CustomMouseEvent } from "../list/BoardList.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite(props: IPropsBoardWrite) {
  const router = useRouter();

  const [writer, setWriter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const [writerError, setWriterError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [contentsError, setContentsError] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");

  const [isModal, setIsModal] = useState<boolean>(false);
  const [userZoneCode, setUserZoneCode] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");
  const [userApartment, setUserApartment] = useState<string>("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
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
    if (!userApartment) {
      setAddressError("🚫 주소를 입력해주세요! 🚫");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
              boardAddress: {
                zipcode: userZoneCode,
                address: userAddress,
                addressDetail: userApartment,
              },
            },
          },
        });
        alert("게시글이 등록되었습니다! 🥳");
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onClickMoveToEdit = async () => {
    if (!password) {
      setPasswordError("🚫 비밀번호를 입력해주세요! 🚫");
    }
    if (password) {
      alert("게시글이 수정되었습니다! 🥳");

      const editVariables: IEditVariables = {};
      if (title) editVariables.title = title;
      if (contents) editVariables.contents = contents;

      const result = await updateBoard({
        variables: {
          updateBoardInput: editVariables,
          password: password,
          boardId: String(router.query._id),
        },
      });
      router.push(`/boards/${result.data?.updateBoard._id}`);
    }
  };

  const onClickMoveToList = () => {
    router.push(`/boards/${router.query._id}`);
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
    setUserZoneCode(data.zonecode);
    setUserAddress(data.address);
    if (!userZoneCode && !userAddress) {
      modalToggle();
    }
  };

  function onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    setUserApartment(event.target.value);
    if (event.target.value !== "") {
      setAddressError("");
    }
  }

  return (
    <>
      <BoardWriteUI
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onClickSubmit={onClickSubmit}
        onClickMoveToEdit={onClickMoveToEdit}
        onClickMoveToList={onClickMoveToList}
        isEdit={props.isEdit}
        data={props.data}
        userZoneCode={userZoneCode}
        userAddress={userAddress}
        userApartment={userApartment}
        addressError={addressError}
        onChangeAddress={onChangeAddress}
        modalToggle={modalToggle}
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
