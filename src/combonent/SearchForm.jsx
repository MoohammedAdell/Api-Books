/* eslint-disable react/prop-types */
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";

const SearchForm = ({ setSearchForm }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const handelChange = (e) => {
    setSearchValue(e.target.value);
    // console.log(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setSearchForm(searchValue);
    // console.log("search name is ", searchValue);
  };

  return (
    <Box
      bgcolor="background.paper"
      sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
        onSubmit={handelSubmit}
      >
        <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search For Title or Author Name.."
          type="search"
          name="search"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handelChange}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button
          variant="contained"
          type="submit"
          sx={{ xs: { p: 0, marginLeft: 0 } }}
        >
          Search
        </Button>
      </Paper>
    </Box>
  );
};

export default SearchForm;
