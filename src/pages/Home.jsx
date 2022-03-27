import React from "react";
import Box from "@mui/material/Box";
import Presentation from "../components/Home/Presentation";

function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        direction: "column",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "0px 0px, 50% 50%",
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/5942089c45541375fd9eabaa_head-bg.png)",
        color: ({ palette }) => palette.getContrastText(palette.info.main),
        px: 18,
        "& > *": {
          my: 2.5,
        },
      }}
    >
      <Presentation />
    </Box>
  );
}

export default Home;
