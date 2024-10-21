/* eslint-disable no-unused-vars */
import React from "react";
import errorImg from "../assets/errorPage.png";
import sadImg from "../assets/sadPage.png";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{width:"40%"}} src={errorImg} alt="" />
      <img style={{width:"30%"}} src={sadImg} alt="" />
    </div>
  );
};

export default Error;
