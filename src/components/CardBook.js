import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const CustomizedButton = styled(Button)`
  background-color: #3a51b0;
  margin-right: 1rem;
`;

function CardBook({ el }) {
  let { name, description, image, pages, id } = el;
  let navigate = useNavigate();

  return (
    <Card style={{ width: "18rem", borderRadius: "0" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ borderRadius: "0", height: "25rem" }}
      />
      <Card.Body
        style={{
          height: "16rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Card.Title>
          <Card.Text
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "4",
              lineClamp: "4",
              overflow: "hidden",
            }}
          >
            {description}
          </Card.Text>
        </div>
        <div>
          <Card.Text style={{ color: "rgb(125, 125, 125)" }}>
            {`${pages} pages`}
          </Card.Text>
          <CustomizedButton onClick={() => navigate(`/${id}`)}>
            See more
          </CustomizedButton>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardBook;
