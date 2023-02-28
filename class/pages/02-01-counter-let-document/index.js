export default function CounterLetDocumentPage() {
  function onClickCountUp() {
    const count = Number(document.getElementById("count").innerText) + 1
    document.getElementById('count').innerText = count
  }
  function onClickCountDown() {
    const count = Number(document.getElementById("count").innerText) - 1
    document.getElementById('count').innerText = count
  }

  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickCountUp}>카운트 올리기👍</button>
      <button onClick={onClickCountDown}>카운트 내리기👎</button>
    </>
  )
}
