import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CardBook from "./CardBook";

const RenderBooks = () => {
  const { booksApi } = useContext(CrudContext);
  return (
    <div className="grid-1-4">
      {booksApi.length > 0 &&
        booksApi.map((el) => <CardBook key={el.id} el={el} />)}
    </div>
  );
};

export default RenderBooks;
