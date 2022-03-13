import React from "react";
import useCustom from "../hooks/useCustom";
import useBreakpoints from "../hooks/useBreakpoints";
import Intro from "./Services/Intro";

function Services() {
  const { maxSmall, maxExtraSmall } = useBreakpoints();
  const { Wrapper } = useCustom();
  return (
    <Wrapper
      sx={{
        maxWidth: "auto",
        backgroundColor: "#1d1d1d",
        px: maxExtraSmall ? 2 : 9,
        py: 9,
        flexDirection: maxSmall ? "column" : "row",
        alignItems: "center",
        color: ({ palette }) => palette.getContrastText(palette.info.main),
      }}
      component="section"
      id="services"
    >
      <Intro />
    </Wrapper>
  );
}

export default Services;
