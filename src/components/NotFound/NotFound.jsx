import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    style={{
      flexDirection: "column",
      alignContent: "center",
      marginTop: 40,
      marginLeft: 40,
      marginBottom: 40,
    }}
  >
    <span>
      <h1>Error 404: URL no encontrada</h1>
      <br />
    </span>

    <Link className="buttonPrimary" to="/" style={{ marginLeft: 200 }}>
      <Button variant="contained" color="primary">
        Ir al Home
      </Button>
    </Link>
  </div>
);

export default NotFound;
