/* eslint-disable array-callback-return */
import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";
import { token } from "../helper/token";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [booksApi, setBooksApi] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearchBook(e.target.value);
  };
  const handleResetFilter = () => {
    setSearchBook("");
  };

  let api = helpHttp();
  let url = "https://mern-books-server.herokuapp.com/api/books/";
  let options = {
    headers: {
      "x-token": token,
    },
  };
  const apiGet = () => {
    api.get(url, options).then((res) => {
      if (!res.err) {
        let booksWithoutFilter = res.books;
        setBooksApi(booksWithoutFilter);
        setError(null);
      } else {
        setBooksApi("");
        setError(res);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    api.get(url, options).then((res) => {
      if (!res.err) {
        let booksWithoutFilter = res.books;
        const booksFilter = booksWithoutFilter
          .filter((el) => {
            if (searchBook === "") {
              return el;
            } else if (
              el.name.toLowerCase().includes(searchBook.toLowerCase()) ||
              el.description.toLowerCase().includes(searchBook.toLowerCase())
            ) {
              return el;
            }
          })
          .map((el) => {
            return el;
          });
        setBooksApi(booksFilter);
        setError(null);
      } else {
        setBooksApi("");
        setError(res);
      }
      setLoading(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBook]);

  let urlPost = "https://mern-books-server.herokuapp.com/api/books/new/";

  const addBook = (data) => {
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
        "x-token": token,
      },
    };

    api.post(urlPost, options).then((res) => {
      if (!res.err) {
        apiGet();
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data, id) => {
    let endpoint = `${url}/${id}`;

    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
        "x-token": token,
      },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        apiGet();
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas Seguro de eliminar el registro con el id ${id}`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: {
          "content-type": "application/json",
          "x-token": token,
        },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          apiGet();
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  const data = {
    booksApi,
    handleSearch,
    searchBook,
    addBook,
    setBooksApi,
    deleteData,
    handleResetFilter,
    updateData,
    error,
    loading,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
