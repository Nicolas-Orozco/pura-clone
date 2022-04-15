import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Header from "./pages/Header";
import About from "./pages/About";
import Team from "./pages/Team";
import Features from "./pages/Features";
import Services from "./pages/Services";
import Footer from "./pages/Footer";
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
      <Home />
      <About />
      <Team />
      <Features />
      <Services />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
