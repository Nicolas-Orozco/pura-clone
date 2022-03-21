import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useCustom from "../../hooks/useCustom";
import useBreakpoints from "../../hooks/useBreakpoints";

function Content() {
  const { Btn } = useCustom();
  const { maxMedium, maxExtraSmall } = useBreakpoints();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={8}
      flex="1"
      p={maxExtraSmall ? 2 : 10}
    >
      <Typography
        variant={maxMedium ? "h4" : "h3"}
        component="h3"
        fontWeight="bold"
      >
        Innovative solutions <br /> to boost your creative{" "}
        <Box component="span" color="secondary.main">
          projects.
        </Box>
      </Typography>
      <Typography variant={maxMedium ? "subtitle1" : "h6"} component="p">
        Proin ex orci, feugiat sit amet diam ac, tincidunt imperdiet urna.Donec
        sed quam at tortor aliquam rutrum sit amet tempus enim. Fusce
        consectetur lorem eu tellus semper ornare. Nullam purus leo, imperdiet
        eget tempus a, mattis vitae eros.
      </Typography>
      <Btn variant="contained" size="large">
        Text Button
      </Btn>
    </Stack>
  );
}

export default Content;
