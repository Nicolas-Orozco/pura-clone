import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useBreakpoints from "../../hooks/useBreakpoints";
import { itemsServices } from "../../data/Items";

function Sections() {
  const { maxExtraSmall } = useBreakpoints();
  return itemsServices.map(({ icon, title, text, id }) => {
    return (
      <Stack
        flex={maxExtraSmall ? "1 1 auto" : "1 1 40%"}
        key={id}
        spacing={1}
        mr={2}
        my={2}
      >
        <Typography variant="subtitle2" color="secondary.main">
          {icon}
        </Typography>
        <Typography variant="h6" component="h5" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="subtitle2" component="p" fontWeight={400}>
          {text}
        </Typography>
      </Stack>
    );
  });
}

export default Sections;
