import axios from "axios";
import {useState} from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("")
  const onClickAsync = () => {
    // 비동기
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result)
  }

  // async function onClickSync(){ ==> 원래 방식
  const onClickSync = async () => {
    // 동기
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result)
    setTitle(result.data.title)
  }

  return (
    <>
      <div>{title}</div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    </>
  )
}
