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
      {/* <Box
        sx={{
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto, cover",
          backgroundPosition: "0px 0px, 50% 50%",
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/5942089c45541375fd9eabaa_head-bg.png)",
        }}
      /> */}
    </ThemeProvider>
  );
}

export default App;
