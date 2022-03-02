import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import "./App.css";

const themeDefault = createTheme({
  pallete: {
    mode: "light",
  },
});
function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <Container maxWidth={false} disableGutters>
        <CssBaseline />
        <Header />
        <h1>Dummy</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
