import React from "react";
import { useState } from "react";

function OffsetPagination({ todos }) {
  let activeList = todos;
  //pagination always need 2 main pieces of state
  // 1.current page and items perpage
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  //some derived values like totalPages - these are calculations
  const totalPages = Math.ceil(activeList.length / itemsPerPage);

  //indexofLast and indexofFirst
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  //currentItems- are the items that we display on the UI
  const currentItems = activeList.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <div>
        <label htmlFor="">
          Items per page:{" "}
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); //nice UX : rest to 1 when page sie changes
            }}
          >
            {[5, 6, 10, 15].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <ul>
          {currentItems.map((todo) => (
            <li key={todo.id}>
              {todo.id}-{todo.todo}-
              <strong>{todo.completed ? "✅" : "❌"}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {/* Adding buttons of specific page */}
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              // aria-current={currentPage === page ? "page" : undefined}
              style={{ fontWeight: currentPage === page ? "bold" : "normal" }}
            >
              {page}
            </button>
          );
        })}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
  s;
}

export default OffsetPagination;
