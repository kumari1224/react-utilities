import React, { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { FETCH_USERS_API } from "./Constants";
import "./InfiniteScroll.css";

function InfiniteScroll() {
  const [pageNumber, setPageNumber] = useState(1);
  const [queryParam, setQueryParam] = useState({ limit: 10 });
  const [searchInput, setSearchInput] = useState("");
  const { data, error, loading, hasMoreData } = useFetch(
    FETCH_USERS_API,
    pageNumber,
    queryParam
  );

  const intersectionObserverRef = useRef(null);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (intersectionObserverRef.current)
        intersectionObserverRef.current.disconnect();

      intersectionObserverRef.current = new IntersectionObserver((entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting && hasMoreData) {
          setPageNumber(pageNumber + 1);
        }
      });

      if (node) intersectionObserverRef.current.observe(node);
    },
    [loading, pageNumber, hasMoreData]
  );
  
  console.log(data, error, loading);

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="home-main">
        {data?.length &&
          data.map((item, index) => {
            if (index === data.length - 1) {
              return (
                <div
                  className="home-grid-item"
                  ref={lastElementRef}
                  key={item.id}
                >
                  <img src={item.download_url} alt={item.author} />
                </div>
              );
            }
            return (
              <div className="home-grid-item" key={item.id}>
                <img src={item.download_url} alt={item.author} />
              </div>
            );
          })}
        {loading && <div className="home-load-more">loading...</div>}
        {error && <div className="home-load-more">{error}</div>}
      </div>
    </div>
  );
}

export default InfiniteScroll;
