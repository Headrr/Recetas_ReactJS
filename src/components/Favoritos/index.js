import React, { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/Saves";
import Grid from "@material-ui/core/Grid";
import RecetasFavoritas from "./RecetasFavoritas";
import Message from "../Common/Message";
import { Heart, Smile, Frown } from "react-feather";

const Recetas = ({ recetas }) => {
  const context = useContext(CartContext);
  const { cart, setCart, existe, setExiste } = context;

  return (
    <Fragment>
      {/* Patrón de diseño Render Props en Componente Message para variar el valor de la prop text de acuerdo al mensaje que se esté pasando */}
      <Message textLikes="Mis me gusta" />

      <div className="root">
        <Grid container spacing={20} justify="left" style={{ marginLeft: 50 }}>
          {cart.length === 0 ? (
            <h2 style={{ color: "gray" }}>
              No tienes recetas en tus me gusta
              <Frown size={35} color="black" fill="yellow" />
            </h2>
          ) : cart.length === 1 ? (
            <>
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
              <h2 style={{ color: "gray" }}>
                Tienes {cart.length} receta en tus me gusta{" "}
                <Smile size={35} color="black" fill="yellow" />
              </h2>
            </>
          ) : (
            <>
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
              <h2 style={{ color: "gray" }}>
                Tienes {cart.length} recetas en tus me gusta{" "}
                <Smile size={35} color="black" fill="yellow" />
              </h2>
            </>
          )}
        </Grid>
        <br></br>
        <Grid container spacing={3} justify="center">
          {cart.length === 0
            ? null
            : cart.map((receta) => {
                const {
                  id,
                  name,
                  tiempo,
                  porciones,
                  tipo,
                  etiquetas,
                  url,
                  descripcion,
                } = receta;
                return (
                  <RecetasFavoritas
                    key={id}
                    id={id}
                    name={name}
                    tiempo={tiempo}
                    porciones={porciones}
                    tipo={tipo}
                    etiquetas={etiquetas}
                    url={url}
                    descripcion={descripcion}
                  />
                );
              })}

          {/* Patrón de diseño Render Props en Componente Receta para renderizar el valor de las props de acuerdo al que se esté pasando */}
        </Grid>
      </div>
    </Fragment>
  );
};

export default Recetas;
