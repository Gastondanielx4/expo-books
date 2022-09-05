import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { TableRowBook } from "./TableRowBook";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const TableBooks = () => {
  const { booksApi } = useContext(CrudContext);

  return (
    <div>
      <h5 style={{ borderBottom: "1.5px thin solid black" }}>Book List</h5>
      <TableContainer
        style={{ overflow: "scroll", maxHeight: "70vh" }}
        component={Paper}
      >
        <Table
          stickyHeader
          sx={
            {
              /* minWidth: 700 */
            }
          }
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Cover</StyledTableCell>
              <StyledTableCell
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Name
              </StyledTableCell>
              <StyledTableCell align="right">Publication Date</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booksApi.map((el) => (
              <TableRowBook key={el.id} el={el} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
