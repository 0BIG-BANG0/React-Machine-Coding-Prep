import React, { useEffect, useRef, useState } from "react";

function InfiniteScroll({ todos }) {
  let activeList = todos;
  const [visibleCount, setVisibleCount] = useState(6);
  //IntersectionObserver watches the loader element as soon it is visible another visible count element elemnt get addded
  const loaderRef = useRef(null);
  const scrollParentRef = useRef(null);

  const visibleTodo = activeList.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        //condition means is the loader visible inside scroll box
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 6);
        }
      },
      {
        root: scrollParentRef.current, //Check intersection inside this scrollable container.
        threshold: 1.0, //Fire event when loader is 100% visible.
      }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div style={{ backgroundColor: "antiquewhite", padding: "100px" }}>
      <div
        ref={scrollParentRef}
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {visibleTodo.map((todo) => (
            <li
              key={todo.id}
              style={{
                padding: "20px",
                borderBottom: "1px solid #ccc",
              }}
            >
              #{todo.id} — {todo.todo} {todo.completed ? "✅" : "❌"}
            </li>
          ))}
        </ul>
        {visibleCount < todos.length && (
          <div
            ref={loaderRef}
            style={{
              padding: "20px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            LoadMore ...
          </div>
        )}
      </div>
    </div>
  );
}

export default InfiniteScroll;
