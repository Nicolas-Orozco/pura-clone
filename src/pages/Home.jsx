import React from "react";
import Presentation from "../components/Home/Presentation";
import useBreakpoints from "../hooks/useBreakpoints";
import useCustom from "../hooks/useCustom";

function Home() {
  const { maxSmall, maxExtraSmall } = useBreakpoints();
  const { Wrapper } = useCustom();
  return (
    <Wrapper
      sx={{
        height: "100vh",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "0px 0px, 50% 50%",
        gap: 5,
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/5942089c45541375fd9eabaa_head-bg.png)",
        color: ({ palette }) => palette.getContrastText(palette.info.main),
        px: () => {
          if (maxExtraSmall) return 1;
          if (maxSmall) return 5;
          return 10;
        },
      }}
    >
      <Presentation />
    </Wrapper>
  );
}

export default Home;
