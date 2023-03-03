import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter()
  const onClickMove1 = () => {
    router.push("/04-08-dynamic-routed-board-query/225320")
  }
  const onClickMove2 = () => {
    router.push("/04-08-dynamic-routed-board-query/265201")
  }
  const onClickMove3 = () => {
    router.push("/04-08-dynamic-routed-board-query/265012")
  }

  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로 이동하기!!!</button><br />
      <button onClick={onClickMove2}>2번 게시글로 이동하기!!!</button><br />
      <button onClick={onClickMove3}>3번 게시글로 이동하기!!!</button><br />
    </>
  )
}
