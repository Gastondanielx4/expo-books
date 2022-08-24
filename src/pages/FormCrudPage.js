import { FormCreateBook } from "../components/FormCreateBook";
import { TableBooks } from "../components/TableBooks";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { AlertOk } from "../components/AlertOk";

const CustomizedButton = styled(Button)`
  background-color: #3a51b0;
  margin-right: 1rem;
`;

export const FormCrudPage = () => {
  let navigate = useNavigate();
  const { alertOk } = useContext(CrudContext);

  return (
    <div>
      {alertOk && <AlertOk />}
      <div className="tittle-button">
        <CustomizedButton onClick={() => navigate(`/`)}>
          {<ArrowBackIcon></ArrowBackIcon>} Back to Books
        </CustomizedButton>
        <h4 style={{ textAlign: "center" }}>Books Administrator</h4>
      </div>
      <div className="grid-1-2">
        <FormCreateBook />
        <TableBooks />
      </div>
    </div>
  );
};
