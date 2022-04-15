import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useCustom from "../hooks/useCustom";
import useBreakpoints from "../hooks/useBreakpoints";

function About() {
  const { Wrapper, Btn, Gradient } = useCustom();
  const { maxExtraSmall, maxSmall, maxMedium } = useBreakpoints();
  return (
    <Wrapper
      sx={{
        width: "auto",
        backgroundImage: Gradient,
        px: maxExtraSmall ? 2 : maxMedium ? 5 : 16 /* () => {
          if (maxExtraSmall) return 2;
          if (maxMedium) return 10;
          return 16;
        } */,
        py: 10,
        flexDirection: "column",
        color: ({ palette }) => palette.getContrastText(palette.info.main),
      }}
      component="section"
      id="about"
    >
      <Typography
        variant={maxSmall ? "h5" : maxMedium ? "h4" : "h3"}
        fontWeight="bold"
      >
        About us
      </Typography>
      <Typography
        variant={
          maxExtraSmall
            ? "subtitle1"
            : maxSmall
            ? "h6"
            : maxMedium
            ? "h5"
            : "h4"
        }
        fontWeight="400"
        lineHeight={1.4}
      >
        Pura comes with 11 unique and stunning demos. We have crafted each and
        every demo with extensive care and precision and the theme is power
        packed yet easy to use.
      </Typography>
      <Btn
        variant="outlined"
        sx={{
          backgroundImage: "none",
          color: ({ palette }) => palette.getContrastText(palette.info.main),
          maxWidth: 450,
          maxHeight: 60,
          borderRadius: 10,
          borderWidth: "medium",
          borderColor: ({ palette }) =>
            palette.getContrastText(palette.info.main),
          "&:hover": {
            borderColor: "unset",
            borderWidth: "unset",
          },
          alignSelf: "flex-end",
        }}
        size="large"
        disableElevation
      >
        <Box component="span" mr={1}>
          Portfolio
        </Box>
        <ArrowForwardIcon />
      </Btn>
    </Wrapper>
  );
}

export default About;
