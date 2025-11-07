import React, { useState } from 'react'

function useCounter({initialCount = 0, steps=1}) {
    const [count,setCount] = useState(initialCount)

    const increment =()=>{
        setCount((prev)=> prev+steps)
    }
    const decrement =()=>{
        setCount((prev)=> prev-steps)
    }
    const reset=()=>{
        setCount(initialCount)
    }
  return {
    count,
    increment,
    decrement,
    reset,
  }
}

export default useCounter
