import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ButtonPrimary = ({ type, to }) => (
  <Link to={to}>
    <Button
      variant="primary"
      style={{ backgroundColor: "#ff530d", color: "white" }}
    >
      {type === "lyrics" ? "Ver receta" : "Volver atrás"}
    </Button>
    {/* <Title>Hola</Title> */}
  </Link>
);

export default ButtonPrimary;
