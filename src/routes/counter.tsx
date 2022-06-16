import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

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
          <button onClick={ () => setCount(count + 1) }>increment</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
