/* eslint-disable no-unused-vars */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LocalLibraryIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              BOOKS FINDER
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
