import React from 'react'
import Counter from './components/Counter'
import './App.css' 
import useWindowSize from './hooks/use-window'
import PostList from './components/PostList'
import DebounceInput from './components/DebounceInput'

function App() {
  const {width,height} = useWindowSize()
  return (
    <div>
      <p>Ques:1 BUild a custom hook to manage and update a counter with appropriate functionalities </p>
      <Counter/>
      <p>QUes2: Build a custom hook to efficiently track and update window dimensions dynamically
      </p>
      <h2>Widht:{width}</h2>
      <h2>Height:{height}</h2>
      <p>Ques:3 BUild a custon hook to fetchData</p>
      {/* <PostList/> */}
      <p>Ques:4 Build a custom hook that delays updating a value untill a specified time has passed after the ;ast change?</p>
      <DebounceInput/>
    </div>
  )
}

export default App
