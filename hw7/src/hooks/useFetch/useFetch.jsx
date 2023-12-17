import { useCallback, useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data: data,
    error: error,
    isloading: isloading,
    refetch: getData,
  };
};

export default UseFetch;
