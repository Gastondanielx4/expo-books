import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useEffect, useState } from "react";
import CrudContext from "../context/CrudContext";
import ButtonEditOpenModal from "./ButtonEditOpenModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TableRowBook = ({ el }) => {
  let { name, image, publicationDate, id } = el;
  const { deleteData } = useContext(CrudContext);
  const [publishDate, setPublishDate] = useState("");

  useEffect(() => {
    if (publicationDate.length > 10) {
      let date = new Date(publicationDate);
      let formatted_date =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      setPublishDate(formatted_date);
    }
    if (publicationDate.length <= 10) {
      setPublishDate(publicationDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = () => {
    deleteData(id, name);
  };

  return (
    <StyledTableRow key={name}>
      <StyledTableCell align="center">
        <img style={{ width: "2.5rem" }} src={image} alt="" />
      </StyledTableCell>
      <StyledTableCell
        style={{
          /*  textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap", */
          display: "-webkitBox",
        }}
      >
        {name}
      </StyledTableCell>
      <StyledTableCell align="right">{publishDate}</StyledTableCell>
      <StyledTableCell>
        <div style={{ display: "flex", height: "inherit" }}>
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <ButtonEditOpenModal el={el} />
        </div>
      </StyledTableCell>
    </StyledTableRow>
  );
};
