/* eslint-disable no-unused-vars */
import React from "react";
import { BeatLoader } from "react-spinners";

const Spinners = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "70vh",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        color: "red",
      }}
    >
     <BeatLoader color="#428bdf"/>
    </div>
  );
};

export default Spinners;
