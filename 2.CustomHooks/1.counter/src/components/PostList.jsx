import React from "react";
import useFetch from "../hooks/use-fetch";

function PostList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Post-List</h1>
      <ul>
        {data?.map((d) => (
          <li key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
