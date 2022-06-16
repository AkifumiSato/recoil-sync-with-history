import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userCounter } from './recoil'

function Counter() {
  const [count, setCount] = useRecoilState(userCounter)

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        <div style={ {
          display: 'flex',
          justifyContent: 'space-between',
          width: 200,
        } }>
          counter: { count }
          <button onClick={ () => setCount(prev => prev + 1) }>increment</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
