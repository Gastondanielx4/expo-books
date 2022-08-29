import React, { useState, useContext } from "react";
import { helpHttp } from "../helper/helpHttp";
import CrudContext from "./CrudContext";
const authContext = React.createContext();

let api = helpHttp();

export function useAuth() {
  return useContext(authContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [nameOfUser, setNameOfUser] = useState("");
  const { setError, setToken, setContentAlert, setAlertOk } =
    useContext(CrudContext);

  function logout() {
    console.log("logout");

    setUser(false);
  }

  let urlAuth = "https://mern-books-server.herokuapp.com/api/auth";

  const authLogin = (email, password) => {
    let options = {
      body: {
        email,
        password,
      },
      headers: {
        "content-type": "application/json",
      },
    };
    api.post(urlAuth, options).then((res) => {
      if (!res.err) {
        setContentAlert({
          title: `Welcome "${res.user.email}"`,
          icon: "success",
          type: "show",
        });
        setAlertOk(true);
        setToken(res.user.token);
        console.log(res);
        setUser(true);
        setNameOfUser(res.user.email);
      } else {
        setContentAlert({
          title: `User or password incorrect`,
          icon: "error",
          type: "show",
        });
        setAlertOk(true);
        setError(res);
        console.log(res);
        setTimeout(() => {
          setError(null);
        }, 8000);
      }
    });
  };

  const value = { user, logout, authLogin, nameOfUser };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
