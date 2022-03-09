import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Contact from "./Footer/Contact";
import useCustom from "../hooks/useCustom";
import useBreakpoints from "../hooks/useBreakpoints";

function Footer() {
  const { maxSmall, maxExtraSmall } = useBreakpoints();
  const { Logo, Copyright } = useCustom();
  return (
    <Box
      sx={{
        px: maxExtraSmall ? 2 : 8.5,
        maxWidth: 2200,
        mx: "auto",
        display: "flex",
        flexDirection: maxSmall ? "column" : "row",
        gap: 4,
        flexWrap: "wrap",
      }}
      component="footer"
    >
      <Box flex="1">
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="baseline"
          spacing={0.5}
          component="a"
          href="#"
          sx={{
            userSelect: "none",
            textDecoration: "none",
            "& > *": {
              mb: 4,
            },
          }}
        >
          <Logo variant="h2">pura</Logo>
          <Typography variant="subtitle1" color="info.main">
            Agency .
          </Typography>
        </Stack>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 400, lineHeight: 2, pr: 5 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum hasbeen the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type .
        </Typography>
      </Box>
      <Box
        sx={{
          flex: "1",
          "& > *": {
            my: 2.5,
          },
          mb: 2.5,
        }}
      >
        <Typography variant="h5" component="h3" fontWeight="bold">
          Reach us
        </Typography>
        <Typography variant="subtitle2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Contact />
      </Box>
      <Box width="100%">
        <Copyright>
          © 2017 Design by themeptation // Developed in
          <br /> webflow by.. <br />
          Clone by Nicolas Orozco
        </Copyright>
      </Box>
    </Box>
  );
}

export default Footer;
