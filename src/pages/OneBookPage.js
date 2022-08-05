import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { helpHttp } from "../helper/helpHttp";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { token } from "../helper/token";
import CrudContext from "../context/CrudContext";

const CustomizedButton = styled(Button)`
  background-color: #3a51b0;
  margin-right: 1rem;
`;

export const OneBookPage = () => {
  const { setError, setLoading } = useContext(CrudContext);
  const [bookOpen, setBookOpen] = useState({});
  let { description, name, excerpt, image, pages } = bookOpen;
  const [publishDate, setPublishDate] = useState("");

  let api = helpHttp();
  let navigate = useNavigate();
  let { id } = useParams();
  let url = `https://mern-books-server.herokuapp.com/api/books/${id}`;
  let options = {
    headers: {
      "x-token": token,
    },
  };

  useEffect(() => {
    api.get(url, options).then((res) => {
      if (!res.err) {
        let newPublishDate = res.book.publicationDate;
        let newBook = res.book;
        setBookOpen(newBook);
        if (newPublishDate.length > 10) {
          let date = new Date(newPublishDate);
          let formatted_date =
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear();
          setPublishDate(formatted_date);
        } else {
          setPublishDate(newPublishDate);
        }
      } else {
        setBookOpen(null);
        setError(res);
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <CustomizedButton onClick={() => navigate(`/`)}>
        {<ArrowBackIcon></ArrowBackIcon>} Back to Books
      </CustomizedButton>
      <br />
      <div className="div-one-book">
        <img
          style={{ height: "30rem", width: "20rem", marginRight: "2rem" }}
          src={image}
          alt={`Foto de portada del libro: ${name}`}
        />
        <div className="info-one-book">
          <h2 style={{ marginTop: "1rem" }}>{name}</h2>
          <p>{description}</p>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: ".5rem" }}>Publish date:</p>
            <p style={{ color: "#999" }}>{publishDate}</p>
          </div>
          <p style={{ color: "#999" }}>{`${pages} pages`}</p>
        </div>
      </div>
      <br />
      <h3>Excerpt</h3>
      <p>{excerpt}</p>
    </main>
  );
};
