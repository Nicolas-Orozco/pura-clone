import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useCustom from "../hooks/useCustom";

function Footer() {
  const { Logo } = useCustom();
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="baseline"
      spacing={0.5}
    >
      <Logo variant="h2" component="a" href="#">
        pura
      </Logo>
      <Typography variant="subtitle1">Agency .</Typography>
    </Stack>
  );
}

export default Footer;
