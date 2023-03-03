import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter()
  const onClickMove = () => {
    router.push("/04-02-static-routed")
  }

  return (
    <button onClick={onClickMove}>페이지 이동하기!!!</button>
  )
}
