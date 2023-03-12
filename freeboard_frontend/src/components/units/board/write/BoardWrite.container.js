import {useRouter} from "next/router";
import {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_BOARD, UPDATE_BOARD} from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props) {
  const router = useRouter()

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD)

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if(event.target.value !== ""){
      setWriterError("");
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
    if(event.target.value !== ""){
      setPasswordError("");
    }
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
    if(event.target.value !== ""){
      setTitleError("");
    }
  }
  function onChangeContents(event) {
    setContents(event.target.value);
    if(event.target.value !== ""){
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
    if(writer && password && title && contents) {
      alert("게시글이 등록되었습니다! 🥳");

      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: contents,
            }
          }
        })
        // console.log(result)
        router.push(`/boards/${result.data.createBoard._id}`)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const onClickMoveToEdit = async () => {
    if (!password) {
      setPasswordError("🚫 비밀번호를 입력해주세요! 🚫");
    }
    if(password) {
      alert("게시글이 수정되었습니다! 🥳");

      const editVariables = {};
      if(title) editVariables.title = title;
      if(contents) editVariables.contents = contents;

      const result = await updateBoard({
        variables: {
          updateBoardInput: editVariables,
          password: password,
          boardId: router.query._id
        }
      })
      router.push(`/boards/${result.data.updateBoard._id}`)
    }
  }

  const onClickMoveToList = () => {
    router.push(`/boards/${router.query._id}`)
  }

  return (
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
    />
  )
}
