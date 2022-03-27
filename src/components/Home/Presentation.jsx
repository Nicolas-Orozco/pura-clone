import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useCustom from "../../hooks/useCustom";
import useBreakpoints from "../../hooks/useBreakpoints";

function Presentation() {
  const { Btn } = useCustom();
  const { maxSmall } = useBreakpoints();
  return (
    <>
      <Typography variant="h5" component="h4">
        We are{" "}
        <Box component="span" fontWeight="300">
          Priffure
        </Box>
      </Typography>
      <Typography
        variant={maxSmall ? "h5" : "h3"}
        component="h2"
        fontWeight="bolder"
      >
        Popular web development agency. Discover more possibilites of you
        website.
      </Typography>
      <Btn variant="contained" size="large" disableElevation>
        Discover us
      </Btn>
    </>
  );
}

export default Presentation;
