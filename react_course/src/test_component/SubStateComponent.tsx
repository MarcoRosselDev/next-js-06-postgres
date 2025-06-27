type MyProps = {
  state : number
  handleState : () => void
}

function SubStateComponent({state, handleState}: MyProps) {
  return (
    <button onClick={handleState}>{state}</button>
  )
}
export default SubStateComponent