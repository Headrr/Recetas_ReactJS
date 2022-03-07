import React from "react";
// import styled from "styled-components";

// const Mensaje = styled.h2`
//   backgroundColor: "#24aa87",
//   borderRadius: 15,
//   padding: 10,
//   marginTop: 20,
//   marginBottom: 30,
//   marginLeft: 50,
//   color: "whitesmoke",
//   textAlign: "center",
//   width: "22.5%",
// `;

const Message = ({ text, textLikes }) => (
  <h2
    style={{
      backgroundColor: "#24aa87",
      borderRadius: 15,
      padding: 10,
      marginTop: 20,
      marginBottom: 30,
      marginLeft: 50,
      color: "whitesmoke",
      textAlign: "center",
      width: "22.5%",
    }}
  >
    <>
      {text}
      {textLikes}
    </>
  </h2>
  // <Mensaje>
  //   {text}
  //   {textLikes}
  // </Mensaje>
);

export default Message;
