import React, { useContext, useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAuth } from "../context/AuthContext";
import { AlertOk } from "../components/AlertOk";

const LoginPage = () => {
  let navigate = useNavigate();
  const { alertOk } = useContext(CrudContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { authLogin, user } = useAuth();

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    authLogin(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div>
      {user && navigate(`/edit`)}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "40vw", height: "50vh", marginTop: "3rem" }}>
          <Card.Body
            style={{
              height: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Books Administrator</h3>
            <hr
              style={{
                fontSize: "2rem",
                border: "none",
                backgroundColor: "#222",
                height: "0.2rem",
                margin: "1rem 2rem ",
              }}
            />
            <h4 className="text-center mb-2">Sign In</h4>
            {alertOk && <AlertOk />}
            <Form onSubmit={handlerSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button type="submit" className="w-100 mt-2">
                Sign In
              </Button>
            </Form>
            <Button
              onClick={() => navigate(`/`)}
              type="submit"
              style={{ backgroundColor: "#3a51b0" }}
            >
              {<ArrowBackIcon></ArrowBackIcon>} Back to Books
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
