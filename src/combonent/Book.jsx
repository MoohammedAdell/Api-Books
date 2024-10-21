/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardActionArea, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import logo from "../assets/Book_Cover_NotAvailable.png";

const Book = ({ book }) => {
  const bookImg = book.volumeInfo.imageLinks?.smallThumbnail
    ? book.volumeInfo.imageLinks.smallThumbnail
    : logo;
  return (
    <Grid item xs={1} sm={1} md={1}>
      <Card sx={{ xs: { width: "100%" }, md: { maxWidth: 245, height: 320 } }}>
        <CardActionArea>
          <a href={book.volumeInfo.previewLink} target="_blank">
            
            <CardMedia
              component="img"
              height="max-content"
              image={bookImg}
              alt="green iguana"
              sx={{ "&:hover":{borderBottom:"6px solid #428bdf"}}}

            />
          </a>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Book;
