import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Intro() {
  return (
    <Stack direction="column" spacing={7} flex="1 1 0">
      <Typography variant="h4" component="h3" fontWeight="bold">
        Suite of features that make Pura one of the best agency on{" "}
        <Box component="span" color="secondary.main">
          2017.
        </Box>
      </Typography>
      <Typography variant="h6" component="p" fontWeight={300}>
        Proin ex orci, feugiat sit amet diam ac, tincidunt imperdiet urna.Donec
        sed quam at tortor aliquamrutrum sit amet tempus enim. Fusce consectetur
        lorem eu tellus semper ornare. Nullam purus leo,imperdiet eget tempus.
      </Typography>
    </Stack>
  );
}

export default Intro;
