import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <Header />
      <h1>Dummy</h1>
    </Container>
  );
}

export default App;
