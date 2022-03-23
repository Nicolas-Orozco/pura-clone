import React from "react";
import Box from "@mui/material/Box";
import useCustom from "../hooks/useCustom";
import useBreakpoints from "../hooks/useBreakpoints";
import Agency from "./Footer/Agency";
import Reach from "./Footer/Reach";

function Footer() {
  const { maxSmall, maxExtraSmall } = useBreakpoints();
  const { Copyright, Wrapper } = useCustom();
  return (
    <Wrapper
      sx={{
        pt: 3,
        pb: 4,
        px: maxExtraSmall ? 2 : 10,
        maxWidth: 2200,
        flexDirection: maxSmall ? "column" : "row",
        backgroundImage: maxSmall
          ? ""
          : "url(https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/59444f6363af5c680814e567_bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        backgroundPosition: "100% 50%",
      }}
      component="footer"
      id="contact"
    >
      <Agency />
      <Reach />
      <Box width="100%">
        <Copyright>
          © 2017 Design by themeptation // Developed in webflow by.. <br />
          Clone by Nicolas Orozco
        </Copyright>
      </Box>
    </Wrapper>
  );
}

export default Footer;
