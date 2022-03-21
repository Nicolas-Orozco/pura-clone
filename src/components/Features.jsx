import React from "react";
import Content from "./Features/Content";
import Example from "./Features/Example";
import useCustom from "../hooks/useCustom";
import useBreakpoints from "../hooks/useBreakpoints";

function Features() {
  const { Wrapper } = useCustom();
  const { maxSmall } = useBreakpoints();
  return (
    <Wrapper
      sx={{
        maxWidth: 2450,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "no-wrap",
        gap: 0,
      }}
      component="section"
    >
      {!maxSmall && <Example />}
      <Content />
    </Wrapper>
  );
}

export default Features;
