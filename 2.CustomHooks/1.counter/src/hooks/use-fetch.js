import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url, options = { method: "GET" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, { ...options });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
