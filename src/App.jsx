import { Box } from "@mui/material";
import "./App.css";
import NavBar from "./combonent/NavBar";
import SearchForm from "./combonent/SearchForm";
import BooksList from "./combonent/BooksList";
import { useState } from "react";
import Footer from "./combonent/Footer";


function App() {
  const [searchForm, setSearchForm] = useState("React Js");
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <NavBar />
        <SearchForm setSearchForm={setSearchForm} />
        <BooksList searchForm={searchForm} />
        <Footer />
        
      </Box>
    </>
  );
}

export default App;
