import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CrudContext from "../context/CrudContext";
import validationsForm from "../helper/FormsValidations";
import Message from "./Message";
import SendIcon from "@mui/icons-material/Send";
import RestartAlt from "@mui/icons-material/RestartAlt";
import styled from "styled-components";

const initialForm = {
  name: "",
  description: "",
  pages: "",
  publicationDate: "",
  excerpt: "",
  image: "",
};
const CustomizedButton = styled(Button)`
  background-color: #3a51b0;
  margin-right: 1rem;
`;

export const FormCreateBook = () => {
  const { addBook } = useContext(CrudContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sendState, setSendState] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setErrors(validationsForm(form));
  }, [form]);

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.entries(errors).length === 0) {
      addBook(form);
      handleReset();
    } else {
      setSendState(true);
      setTimeout(() => {
        setSendState(false);
      }, 4000);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <h5>Form</h5>
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
          error={errors.name}
          size="small"
          id="outlined-error-helper-text"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
          helperText={errors.name}
        />
        <TextField
          error={errors.description}
          id="outlined-multiline-static"
          label="Description"
          name="description"
          multiline
          rows={4}
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.description}
          required
          helperText={errors.description}
        />
        <TextField
          error={errors.pages}
          size="small"
          id="outlined-basic"
          label="Pages"
          variant="outlined"
          type="text"
          name="pages"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.pages}
          required
          helperText={errors.pages}
        />
        <TextField
          error={errors.publicationDate}
          size="small"
          id="outlined-basic"
          label="Publication Date (dd/mm/yyyy)"
          variant="outlined"
          type="text"
          name="publicationDate"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.publicationDate}
          required
          helperText={errors.publicationDate}
        />
        <TextField
          error={errors.excerpt}
          id="outlined-multiline-static"
          label="Excerpt"
          name="excerpt"
          multiline
          rows={6}
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.excerpt}
          required
          helperText={errors.excerpt}
        />
        <TextField
          error={errors.image}
          size="small"
          id="outlined-basic"
          label="URL Image"
          variant="outlined"
          type="text"
          name="image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.image}
          required
          helperText={errors.image}
        />
        {sendState && (
          <Message msg={`Check the form errors`} bgColor="#dc3545" />
        )}
        <div style={{ margin: "0 auto" }}>
          <CustomizedButton
            variant="contained"
            type="submit"
            value="Enviar"
            style={{ maxWidth: "20rem", margin: "0.5rem" }}
            endIcon={<SendIcon />}
          >
            Send
          </CustomizedButton>
          <CustomizedButton
            variant="contained"
            type="button"
            onClick={handleReset}
            style={{ maxWidth: "20rem", margin: "0.5rem" }}
            endIcon={<RestartAlt />}
          >
            Reset
          </CustomizedButton>
        </div>
      </form>
    </div>
  );
};
