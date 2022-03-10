import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import useCustom from "../../hooks/useCustom";

function Agency() {
  const { Logo } = useCustom();
  return (
    <Box flex="1">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="baseline"
        spacing={0.5}
        component="a"
        href="#"
        sx={{
          userSelect: "none",
          textDecoration: "none",
          "& > *": {
            mb: 4.1,
          },
        }}
      >
        <Logo variant="h2">pura</Logo>
        <Typography variant="subtitle1" color="info.main">
          Agency .
        </Typography>
      </Stack>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 400, lineHeight: 2, pr: 8 }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum hasbeen the industry&#39;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type .
      </Typography>
    </Box>
  );
}

export default Agency;
