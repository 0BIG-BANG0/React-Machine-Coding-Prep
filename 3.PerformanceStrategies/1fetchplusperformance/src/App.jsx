import React, { useState, useEffect, useCallback } from "react";
import { FixedSizeList as List } from "react-window";

// ✅ Custom inner element for react-window to render a valid <tbody>
const TbodyElement = React.forwardRef(({ style, ...rest }, ref) => (
  <tbody ref={ref} style={style} {...rest} />
));

export default function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Failed to Fetch");
      }
      const data = await res.json();
      setPost(data);
    } catch (error) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) return <h1>Loading....</h1>;
  if (errors) return <h1>{errors}</h1>;

  // ✅ Row renderer for react-window
  const Row = ({ index, style }) => {
    const p = post[index];
    return (
      <tr style={style} key={p.id}>
        <td>{p.id}</td>
        <td>{p.title}</td>
        <td>{p.body}</td>
      </tr>
    );
  };

  return (
    <div className="App">
      <table border="1px" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>

        {/* 👇 Virtualized tbody */}
        <List
          height={400}
          itemCount={post.length}
          itemSize={50}
          width="100%"
          outerElementType={TbodyElement} // ✅ tbody wrapper
        >
          {Row}
        </List>
      </table>
    </div>
  );
}
