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
        px: maxExtraSmall ? 2 : 9,
        maxWidth: 2200,
        flexDirection: maxSmall ? "column" : "row",
      }}
      component="footer"
    >
      <Agency />
      <Reach />
      <Box width="100%">
        <Copyright mb={3}>
          © 2017 Design by themeptation // Developed in
          <br /> webflow by.. <br />
          Clone by Nicolas Orozco
        </Copyright>
      </Box>
    </Wrapper>
  );
}

export default Footer;
