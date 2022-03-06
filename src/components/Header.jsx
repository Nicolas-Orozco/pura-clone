import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import useCustom from "../hooks/useCustom";
import HamMenu from "./Header/HamMenu";
import MainMenu from "./Header/MainMenu";

export default function Header() {
  const isMedium = useMediaQuery("(max-width:991px)");
  const { Logo } = useCustom();
  return (
    <AppBar
      color="transparent"
      position="static"
      sx={{ boxShadow: "none" }}
      id="home"
    >
      <Toolbar
        sx={{
          d: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
          mx: 9,
        }}
      >
        <Logo variant="h3" component="a" href="#home">
          pura
        </Logo>
        {isMedium ? <HamMenu /> : <MainMenu />}
      </Toolbar>
    </AppBar>
  );
}
