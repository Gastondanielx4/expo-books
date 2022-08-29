import { useContext } from "react";
import Swal from "sweetalert2";
import CrudContext from "../context/CrudContext";

export const AlertOk = () => {
  const { setAlertOk, contentAlert, handleDelete, error } =
    useContext(CrudContext);
  const { title, icon, type } = contentAlert;
  if (type === "show") {
    Swal.fire({
      position: "center",
      icon,
      title,
      showConfirmButton: false,
      timer: 3000,
    });
    setAlertOk(false);
  }
  if (type === "confirm") {
    Swal.fire({
      title: `Are you sure to delete "${title}"`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(true);
        if (error === null) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          Swal.fire(error);
        }
      }
    });
    setAlertOk(false);
  }
  return;
};
