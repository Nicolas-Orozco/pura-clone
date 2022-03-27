import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useCustom from "../../hooks/useCustom";

function Presentation() {
  const { Btn } = useCustom();
  return (
    <>
      <Typography variant="h5" component="h4">
        We are{" "}
        <Box component="span" fontWeight="300">
          Priffure
        </Box>
      </Typography>
      <Typography variant="h3" component="h2" fontWeight="bolder">
        Popular web development agency. Discover more possibilites of you
        website.
      </Typography>
      <Btn
        variant="contained"
        size="large"
        disableElevation
        sx={{ px: 6, py: 1.5, mt: 8 }}
      >
        Discover us
      </Btn>
    </>
  );
}

export default Presentation;
