import React from "react";
// import errorImage from "../assets/static/images/error.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <span className="error-text">Ha ocurrido un error</span>
          <br />
          <Link className="buttonPrimary" to="/">
            <Button variant="contained" color="primary">
              Volver al Home
            </Button>
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
