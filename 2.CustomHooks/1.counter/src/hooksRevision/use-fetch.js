import React, { useEffect, useState } from "react";

function useFetch(url, options = { method: "GET" }) {
  // console.log(url)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) {
        throw new Error("Req res was not ok");
      }
      const result = await res.json();
      // console.log(result)
      setData(result);
      console.log(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);
  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
