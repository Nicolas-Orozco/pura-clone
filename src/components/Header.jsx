import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import HamMenu from "./Header/HamMenu";
import MainMenu from "./Header/MainMenu";

export default function Header() {
  const breakMedium = useMediaQuery("(max-width:991px)");
  return (
    <AppBar
      color="transparent"
      position="absolute"
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
        <Typography
          variant="h3"
          component="a"
          href="#home"
          sx={{
            background:
              "linear-gradient(45deg, #fd3fb3, #fd3f81 31%, #fd3e4f 78%, #fd3e4f);",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textDecoration: "none",
            fontWeight: "bold",
            userSelect: "none",
            textTransform: "capitalize",
            "&:active": {
              color: "inherit",
            },
          }}
        >
          pura
        </Typography>
        {breakMedium ? <HamMenu /> : <MainMenu />}
      </Toolbar>
    </AppBar>
  );
}
