import { useState } from 'react'
import SubStateComponent from './SubStateComponent'

function TestStateScope() {
  const [state, setState] = useState(0)

  function handleState() {
    setState(state + 1)
  }

  return (
    <div>
      <SubStateComponent state={state} handleState={handleState} />
      <SubStateComponent state={state} handleState={handleState} />
      <SubStateComponent state={state} handleState={handleState} />
    </div>
  )
}
export default TestStateScope