/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Grid } from "@mui/material";
import React from "react";
import Book from "./Book";
import Results from "./Results";
import useBooks from "../hooks/useBooks";
import BeatLoader from "./Spinners";
import Error from "./Error";

const BooksList = ({ searchForm }) => {
  const { isError,isLoading, isSuccess, data } = useBooks(searchForm);
  //   console.log(data)

  const booksList = data?.items.map((item, i) => <Book key={i} book={item} />);

  if (isLoading) return <BeatLoader />;
  if(isError) return <Error />
  return (
    <>
      {isSuccess && (
        <Box bgcolor="background.paper" sx={{ p: 6 }}>
          <Results searchForm={searchForm} />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 4, md: 6 }}
          >
            {booksList}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default BooksList;
