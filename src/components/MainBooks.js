import React, { useContext } from "react";
import RenderBooks from "./RenderBooks";
import { SearchBook } from "./SearchBook";
import Loader from "./Loader";
import Message from "./Message";
import CrudContext from "../context/CrudContext";

export const MainBooks = () => {
  const { loading, error } = useContext(CrudContext);
  return (
    <main>
      <SearchBook />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <RenderBooks />
    </main>
  );
};
