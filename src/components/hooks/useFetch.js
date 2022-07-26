import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, pageNumber, queryParam = "") {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const fetchAPIData = useCallback(() => {
    setError(null);
    setLoading(true);
    let cancelToken;
    axios({
      method: "GET",
      url: url,
      params: {
        ...queryParam,
        page: pageNumber,
      },
      cancelToken: new axios.CancelToken((c) => (cancelToken = c)),
    })
      .then((response) => {
        setData((prev) => [...prev, ...response.data]);
        setLoading(false);
        setHasMoreData(response?.data?.length ? true : false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        if (axios.isCancel(error)) return;
      });

    return () => cancelToken();
  }, [pageNumber, url, queryParam]);

  useEffect(() => {
    if (url) {
      fetchAPIData();
    }
  }, [url, queryParam, pageNumber, fetchAPIData]);

  return { data, error, loading, hasMoreData };
}

export default useFetch;
