/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import React from "react";

const Results = ({ searchForm }) => {
  return (
    <Box sx={{ marginY: "2rem" }}>
      <Typography variant="h5" color="text.secondary">
        40 Book Found Related To{" "}
        <strong style={{ color: "#428bdf", transform: "uppercase" }}>
          {searchForm}
        </strong>
      </Typography>
    </Box>
  );
};

export default Results;
