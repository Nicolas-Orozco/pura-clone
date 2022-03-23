import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Contact from "./Contact";

function Reach() {
  return (
    <Box flex={1} mt={3} mb={8}>
      <Typography variant="h5" component="h3" fontWeight="bold" pb={3}>
        Reach us
      </Typography>
      <Typography variant="subtitle2" pr={4} fontWeight={500}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Contact />
    </Box>
  );
}

export default Reach;
