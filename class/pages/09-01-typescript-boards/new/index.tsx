import BoardWrite from "../../../src/components/units/board/09-write/BoardWrite.container";

export default function BoardWritePage() {
  return (
      <>
        {BoardWrite({ isEdit: false })}
      </>
  )
  // return  <BoardWrite isEdit={false} />  JSX
}
