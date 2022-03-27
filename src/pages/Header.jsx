import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useBreakpoints from "../hooks/useBreakpoints";
import useCustom from "../hooks/useCustom";
import HamMenu from "../components/Header/HamMenu";
import MainMenu from "../components/Header/MainMenu";

export default function Header() {
  const { maxExtraSmall, maxMedium } = useBreakpoints();
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
          mx: maxExtraSmall ? 1 : 6,
        }}
      >
        <Logo variant="h3" component="a" href="#home">
          pura
        </Logo>
        {maxMedium ? <HamMenu /> : <MainMenu />}
      </Toolbar>
    </AppBar>
  );
}
