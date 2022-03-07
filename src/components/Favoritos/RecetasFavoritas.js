import React, { useContext, useState } from "react";
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
} from "reactstrap";
import { Clock, User, Heart } from "react-feather";
import Flags from "country-flag-icons/react/3x2";
import propTypes from "prop-types";
import ModalDelete from "../../components/ModalDeleteLikes";

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

const Track = (props) => {
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
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState("");
  const [itemId, setItemId] = useState("");

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
        marginBottom: 40,
      }}
    >
      <ModalDelete
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        name={name}
        item={item}
        itemId={itemId}
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
              <h2>{name}</h2>
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
                <Button
                  color="white"
                  style={{
                    color: "black",
                    fontSize: 16,
                    padding: 5,
                    borderRadius: 5,
                    height: 35,
                  }}
                  onClick={() => {
                    setItem(props);
                    setItemId(id);
                    setModalVisible(true);
                  }}
                >
                  <Heart size={25} color="red" fill="red" /> Ya no me gusta
                </Button>
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
                  onClick={() => {
                    setModalVisible(true);
                  }}
                >
                  <Heart size={25} color="red" /> Like
                </Button>
              )}
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
Track.propTypes = {
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

export default Track;
