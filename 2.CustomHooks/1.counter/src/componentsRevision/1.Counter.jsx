import React from 'react'
import useCounter from '../hooksRevision/use-counter'

function Counter1() {
    const {count,increment,decrement,reset} = useCounter({initialCount:0,steps:4})
    
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter1
