import React from "react";
import Stack from "@mui/material/Stack";
import useCustom from "../hooks/useCustom";
import useBreakpoints from "../hooks/useBreakpoints";
import Intro from "./Services/Intro";
import Articles from "./Services/Articles";

function Services() {
  const { maxMedium, maxExtraSmall } = useBreakpoints();
  const { Wrapper } = useCustom();
  return (
    <Wrapper
      sx={{
        width: "auto",
        backgroundColor: "#1d1d1d",
        px: maxExtraSmall ? 2 : 8,
        py: 9,
        flexDirection: maxMedium ? "column" : "row",
        alignItems: "center",
        color: ({ palette }) => palette.getContrastText(palette.info.main),
      }}
      component="section"
      id="services"
    >
      <Intro />
      <Stack
        direction="row"
        flex={1}
        justifyContent="space-between"
        alignItems="stretch"
        flexWrap="wrap"
      >
        <Articles />
      </Stack>
    </Wrapper>
  );
}

export default Services;
