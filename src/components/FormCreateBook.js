import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
  name: "",
  description: "",
  pages: "",
  publicationDate: "",
  excerpt: "",
  image: "",
};

export const FormCreateBook = () => {
  const { addBook } = useContext(CrudContext);
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(form);
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <h5>Formulario</h5>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "75vh",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          size="small"
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
        />
        <TextField
          id="outlined-multiline-static"
          label="Descripción"
          name="description"
          multiline
          rows={4}
          onChange={handleChange}
          value={form.description}
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Páginas"
          variant="outlined"
          type="text"
          name="pages"
          onChange={handleChange}
          value={form.pages}
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="Fecha de Publicación"
          variant="outlined"
          type="text"
          name="publicationDate"
          onChange={handleChange}
          value={form.publicationDate}
        />
        <TextField
          id="outlined-multiline-static"
          label="Excerpt"
          name="excerpt"
          multiline
          rows={6}
          onChange={handleChange}
          value={form.excerpt}
        />
        <TextField
          size="small"
          id="outlined-basic"
          label="URL Imagen"
          variant="outlined"
          type="text"
          name="image"
          onChange={handleChange}
          value={form.image}
        />
        <input
          type="submit"
          value="Enviar"
          style={{ maxWidth: "20rem", margin: "0 auto" }}
        />
      </form>
    </div>
  );
};
