import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CardBook from "./CardBook";
import Message from "./Message";

const RenderBooks = () => {
  const { booksFilter, booksApi, error, searched } = useContext(CrudContext);
  return (
    <div className="grid-1-4">
      {booksFilter.length > 0
        ? booksFilter.map((el) => <CardBook key={el.id} el={el} />)
        : booksApi && searched === ""
        ? booksApi.map((el) => <CardBook key={el.id} el={el} />)
        : error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
          )}
    </div>
  );
};

export default RenderBooks;
