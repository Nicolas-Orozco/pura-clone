import React from "react";
import Box from "@mui/material/Box";

function Example() {
  return (
    <Box
      sx={{
        flex: "1",
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/59440e85ebd3db1d5c4125c0_mock-1.png)",
        backgroundPosition: "50% 50%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

export default Example;
