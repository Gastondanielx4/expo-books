import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, styled } from "@mui/material";
import CrudContext from "../context/CrudContext";
import Edit from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CustomTextField = styled(TextField)`
  margin: 2rem 0 2rem 0;
  width: 18rem;
  position: relative;
`;
const CustomIconButton = styled(IconButton)`
  width: 4rem;
  height: 4rem;
  font-size: 2.5rem;
  background-color: white;
  border: 5px solid #3a50af;
`;
export const SearchBook = () => {
  const { handleSearch } = useContext(CrudContext);
  const { user } = useAuth();

  let navigate = useNavigate();

  return (
    <div className="search-button-edit">
      <div className="div-search">
        <CustomTextField
          type="search"
          id="standard-basic"
          label="Name or description"
          variant="standard"
          name="busqueda"
          onChange={handleSearch}
        />
      </div>
      <CustomIconButton
        onClick={
          user
            ? () => {
                navigate(`/edit`);
              }
            : () => {
                navigate(`/login`);
              }
        }
      >
        <Edit fontSize="inherit" />
      </CustomIconButton>
    </div>
  );
};
