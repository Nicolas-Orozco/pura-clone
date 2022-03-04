import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import "./App.css";

const puraTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fd3fb3",
    },
    secondary: {
      main: "#fd3e4f",
    },
    info: {
      main: "#000000",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={puraTheme}>
      <CssBaseline />
      <Header />
      <h1>Dummy</h1>
      <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1>{" "}
      <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1>{" "}
      <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1>{" "}
      <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1>{" "}
      <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1>{" "}
      <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1> <h1>Dummy</h1>
    </ThemeProvider>
  );
}

export default App;
