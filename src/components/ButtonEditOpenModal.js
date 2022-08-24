import Edit from "@mui/icons-material/Edit";
import { Button, IconButton, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import SendIcon from "@mui/icons-material/Send";
import CrudContext from "../context/CrudContext";
import validationsForm from "../helper/FormsValidations";

const initialForm = {
  name: "",
  description: "",
  pages: "",
  publicationDate: "",
  excerpt: "",
  image: "",
};
const ButtonEditOpenModal = ({ el }) => {
  let { name, image, publicationDate, id, description, pages, excerpt } = el;
  const { updateData } = useContext(CrudContext);
  initialForm.name = name;
  initialForm.description = description;
  initialForm.pages = pages;
  initialForm.publicationDate = publicationDate;
  initialForm.excerpt = excerpt;
  initialForm.image = image;

  /* initialForm = {
    name,
    description,
    pages,
    publicationDate,
    excerpt,
    image,
  }; */
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const handleEdit = () => {
    openModal1();
  };

  useEffect(() => {
    setErrors(validationsForm(form));
  }, [form]);

  /*  const handleBlur = (e) => {
    setErrors(validationsForm(form));
  }; */
  const sendForm = (e) => {
    e.preventDefault();
    updateData(form, id);
    closeModal1();
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <IconButton el={el} onClick={handleEdit} aria-label="edit">
        <Edit />
      </IconButton>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <form onSubmit={sendForm}>
          <div>
            <div className="div-one-book">
              <img
                style={{
                  height: "21rem",
                  width: "14rem",
                  marginRight: "1rem",
                  borderRadius: "7px",
                }}
                src={image}
                alt={`Foto de portada del libro: ${name}`}
              />
              <div className="info-one-book">
                <h4>{name}</h4>
                <TextField
                  error={errors.name}
                  size="small"
                  id="outlined-error-helper-text"
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  style={{ margin: "0.5rem 0" }}
                  onChange={handleChange}
                  //onBlur={handleBlur}
                  defaultValue={form.name}
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
                  style={{ margin: "0.5rem 0" }}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  defaultValue={form.description}
                  required
                  helperText={errors.description}
                />
                <div style={{ display: "flex" }}>
                  <TextField
                    error={errors.publicationDate}
                    size="small"
                    id="outlined-basic"
                    label="Publication Date (dd/mm/yyyy)"
                    variant="outlined"
                    type="text"
                    name="publicationDate"
                    style={{ margin: "0.5rem 1rem 0.5rem 0", width: "15rem" }}
                    onChange={handleChange}
                    //onBlur={handleBlur}
                    defaultValue={form.publicationDate}
                    required
                    helperText={errors.publicationDate}
                  />
                  <TextField
                    error={errors.pages}
                    size="small"
                    id="outlined-error-helper-text"
                    label="Pages"
                    variant="outlined"
                    type="text"
                    name="pages"
                    style={{ margin: "0.5rem 0" }}
                    onChange={handleChange}
                    //onBlur={handleBlur}
                    defaultValue={form.pages}
                    required
                    helperText={errors.pages}
                  />
                </div>
                <TextField
                  error={errors.image}
                  size="small"
                  id="outlined-basic"
                  label="URL Image"
                  variant="outlined"
                  type="text"
                  name="image"
                  style={{ margin: "0.5rem 0" }}
                  onChange={handleChange}
                  //onBlur={handleBlur}
                  value={form.image}
                  required
                  helperText={errors.image}
                />
              </div>
            </div>
            <div>
              <TextField
                error={errors.excerpt}
                id="outlined-multiline-static"
                label="Excerpt"
                name="excerpt"
                multiline
                rows={12}
                style={{ width: "100%", margin: "1rem 0" }}
                onChange={handleChange}
                //onBlur={handleBlur}
                defaultValue={form.excerpt}
                required
                helperText={errors.excerpt}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  value="Enviar"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ButtonEditOpenModal;
