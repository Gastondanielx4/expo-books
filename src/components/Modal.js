import { Button } from "@mui/material";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <h4 style={{ marginLeft: "2rem" }}>Edit Book</h4>
        <hr
          style={{
            fontSize: "2rem",
            border: "none",
            backgroundColor: "#222",
            height: "0.2rem",
          }}
        />
        <Button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            textAlign: "center",
          }}
          variant="contained"
          onClick={closeModal}
        >
          {<CloseIcon />}
        </Button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
