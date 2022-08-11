import { Button } from "@mui/material";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <Button
          style={{ position: "absolute", top: "1rem", right: "1rem" }}
          variant="contained"
          onClick={closeModal}
          endIcon={<CloseIcon />}
        >
          Close
        </Button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
