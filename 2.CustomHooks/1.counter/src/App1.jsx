import React from 'react'
import Counter1 from './componentsRevision/1.Counter'
import useWindow from './hooksRevision/use-window'
import PostList from './componentsRevision/2.PostList'
import PostList2 from './componentsRevision/2.PostList'
import DebounceInput1 from './componentsRevision/DebounceInput'

function App1() {
  const [width,height] = useWindow()
  return (
    <div>
      <p>Ques:1 BUild a custom hook to manage and update a counter with appropriate functionalities </p>
      <Counter1/>
      <p>QUes2: Build a custom hook to efficiently track and update window dimensions dynamically
      </p>
      <h3>Widht : {width}</h3>
      <h3>Height : {height}</h3>
      <p>Ques:3 BUild a custon hook to fetchData</p>
      {/* <PostList2/> */}
      <p>Ques:4 Build a custom hook that delays updating a value untill a specified time has passed after the Last change?</p>
      <DebounceInput1/>
    </div>
  )
}

export default App1
