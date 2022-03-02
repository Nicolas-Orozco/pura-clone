import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header() {
  const breakMedium = useMediaQuery("(max-width:991px)");
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
        <Typography
          variant="h4"
          component="a"
          href="#home"
          sx={{
            color: "inherit",
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
        {breakMedium ? <MenuIcon sx={{ fontSize: 35 }} /> : <p>Links</p>}
      </Toolbar>
    </AppBar>
  );
}
