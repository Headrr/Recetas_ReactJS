import React, { useContext } from "react";
import ButtonPrimary from "../Common/ButtonPrimary";
import { CartContext } from "../../contexts/Saves";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardSubtitle,
  CardTitle,
  CardFooter,
  CardImg,
  Button,
  Label,
} from "reactstrap";
import { Clock, User, Heart } from "react-feather";
import Flags from "country-flag-icons/react/3x2";
import propTypes from "prop-types";
import ModalAdd from "../../components/ModalAddFavoritos";
import useModal from "../../custom-hooks/useModal";

const tipoComida = (tipo) => {
  if (tipo === "China")
    return (
      <Flags.CH title="China" style={{ width: "12%", borderRadius: 10 }} />
    );
  if (tipo === "Española")
    return <Flags.ES title="España" style={{ width: "12%" }} />;
  if (tipo === "Chilena")
    return <Flags.CL title="Chile" style={{ width: "12%" }} />;
  if (tipo === "Italiana")
    return <Flags.IT title="Italia" style={{ width: "12%" }} />;
  if (tipo === "Francia")
    return <Flags.FR title="Francia" style={{ width: "12%" }} />;
  if (tipo === "Egipto")
    return <Flags.EG title="Egipto" style={{ width: "12%" }} />;
  else return <Flags.CL title="Chile" style={{ width: "12%" }} />;
};

const Receta = (props) => {
  const {
    id,
    name,
    tiempo,
    porciones,
    tipo,
    etiquetas,
    url,
    descripcion,
  } = props;
  const context = useContext(CartContext);
  const { existe } = context;

  const { modal, handleCloseModal, handleOpenModal } = useModal();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 550,
        width: "22%",
        alignItems: "center",
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 60,
      }}
    >
      <ModalAdd
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        receta={props}
        id={id}
        name={name}
        modal={modal}
      />

      <Card style={{ borderRadius: 15, marginBottom: 20 }}>
        <CardHeader
          style={{
            backgroundColor: "#a0a0a0ba",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          <CardTitle>
            <Row style={{ justifyContent: "space-between", margin: 10 }}>
              <h2>
                {name}{" "}
                {existe.includes(id) ? (
                  <Heart
                    strokeWidth={3}
                    fill="red"
                    size={25}
                    color="red"
                    style={{
                      color: "red",
                      marginRight: 10,
                      margin: 5,
                    }}
                  />
                ) : null}
              </h2>
              {tipoComida(tipo)}
            </Row>
          </CardTitle>
          <CardSubtitle>
            <Row align="left">
              <Col>
                {etiquetas.map((item) => (
                  <span style={{ margin: 3 }}>
                    <i>{item}</i>
                  </span>
                ))}
              </Col>
              <Col align="right"></Col>
            </Row>
          </CardSubtitle>
        </CardHeader>
        <CardBody>
          <CardImg
            component="img"
            height="194"
            src={url}
            alt="fotografía receta"
            style={{ borderRadius: 10 }}
          />

          <div style={{ textAlign: "justify", marginTop: 10, height: 110 }}>
            <i>{descripcion}</i>
          </div>

          <Row>
            <Col>
              {existe.includes(id) ? (
                <Label
                  color="warning"
                  style={{
                    color: "black",
                    fontSize: 16,
                    padding: 5,
                    borderRadius: 5,
                    height: 35,
                  }}
                >
                  <Heart size={25} color="red" fill="red" /> Me gusta!
                </Label>
              ) : (
                <Button
                  color="white"
                  style={{
                    color: "black",
                    fontSize: 16,
                    padding: 5,
                    borderRadius: 5,
                    height: 35,
                  }}
                  onClick={handleOpenModal}
                >
                  <Heart size={25} color="red" /> Dar me gusta
                </Button>
              )}
            </Col>
            <Col align="right">
              <ButtonPrimary type="lyrics" to={`/recetas/id/${id}`} />
            </Col>
          </Row>
        </CardBody>
        <CardFooter
          style={{
            backgroundColor: "#a0a0a0ba",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Col>
            <Clock size={20} /> Tiempo de preparación: <strong>{tiempo}</strong>{" "}
            minutos
          </Col>

          <Col>
            <User size={20} /> Porciones: <strong>{porciones}</strong>
          </Col>
        </CardFooter>
      </Card>
    </div>
  );
};

// DOCUMENTACIÓN PROP-TYPE
Receta.propTypes = {
  data: propTypes.object,
};

tipoComida.propTypes = {
  data: propTypes.oneOf([
    "China",
    "Española",
    "Chilena",
    "Italiana",
    "Francia",
    "Egipto",
  ]),
};

export default Receta;
