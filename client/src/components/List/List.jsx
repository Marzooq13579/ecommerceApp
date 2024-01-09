import React from "react";
import "./List.scss";

const List = () => {
  const data = [],
    loading = true;

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
