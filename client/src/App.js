import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";

const App = () => {

  return (
    <Container maxWidth="lg">
    <Navbar />
    <Home />
    </Container>
  );
};

export default App;
