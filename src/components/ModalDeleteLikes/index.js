import React, { useContext } from "react";
import { ModalTitle } from "react-bootstrap";
import { Row, Col, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { CartContext } from "../../contexts/Saves";
import { Heart } from "react-feather";

const AddFavoritos = ({ modalVisible, setModalVisible, name, item }) => {
  const context = useContext(CartContext);
  const { cart, setCart, existe, setExiste } = context;

  return (
    <Modal
      isOpen={modalVisible}
      toggle={() => setModalVisible(!modalVisible)}
      className="modal-m"
      centered={true}
    >
      <ModalHeader toggle={() => setModalVisible(!modalVisible)}>
        <ModalTitle>
          <h3
            style={{
              marginVertical: 10,
              color: "grey",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            ¿Deseas eliminar esta receta de tus me gusta?
          </h3>
        </ModalTitle>
        <br></br>
        <h5 style={{ color: "grey" }}>
          <Heart
            strokeWidth={3}
            size={25}
            color="red"
            style={{
              color: "red",
              marginRight: 10,
              margin: 5,
            }}
          />
          {name}
        </h5>
        <br></br>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col>
            <Button
              style={{
                backgroundColor: "red",
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: "100%",
                alignSelf: "center",
                margin: 5,
              }}
              onClick={() => {
                const filtered = cart.filter(function(element) {
                  return element.id !== item.id;
                });
                setCart(filtered);
                const filteredItem = existe.filter(function(element) {
                  return element !== item.id;
                });
                setExiste(filteredItem);
                setModalVisible(false);
              }}
            >
              <h5
                style={{
                  fontSize: 20,
                  paddingHorizontal: 5,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                Sí
              </h5>
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                backgroundColor: "grey",
                padding: 5,
                marginVertical: 5,
                borderRadius: 5,
                width: "100%",
                alignSelf: "center",
                margin: 5,
              }}
              onClick={() => setModalVisible(false)}
            >
              <h5
                style={{
                  fontSize: 20,
                  paddingHorizontal: 5,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                No
              </h5>
            </Button>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default AddFavoritos;
