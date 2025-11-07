import React from 'react'
import useFetch from '../hooksRevision/use-fetch'


function PostList2() {
    const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/posts")
    console.log(data)
    if(loading){
       return <div>Loading....</div>
    }
    if(error){
       return <div>Error : {error.message}</div>
    }
  return (
    <div>
      <h2>Posts</h2>
      <table border={"1px"}>
        <thead>
            <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            </tr>
        </thead>
        <tbody>
            {data.map((d)=>(
                <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.title}</td>
                <td>{d.body}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostList2
