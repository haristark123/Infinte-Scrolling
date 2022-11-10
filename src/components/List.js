import React, { useEffect, useState, useRef } from "react";

function List() {
  const [listData, setListData] = useState([]);
  const [count, setCount] = useState(1);
  const location = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=${count}&_limit=10`
      ).then((res) => res.json());
      setListData([...listData, ...data]);
    };
    fetchData();
  }, [count]);

  const scrollHandler = () => {
    const { scrollTop, clientHeight, scrollHeight } = location?.current;
    if (Math.round(scrollTop + clientHeight) === scrollHeight) {
      setCount(count + 1);
    }
  };

  return (
    <div
      onScroll={scrollHandler}
      style={{
        height: "100vh",
        overflowY: "auto",
      }}
      ref={location}
    >
      {listData?.map((item, index) => (
        <>
          <img width="300px" src={item?.url} key={index} />
          <span>{index}</span>
        </>
      ))}
    </div>
  );
}

export default List;
