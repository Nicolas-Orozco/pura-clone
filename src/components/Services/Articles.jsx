import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useBreakpoints from "../../hooks/useBreakpoints";
import { itemsServices } from "../../data/Items";

function Articles() {
  const { maxSmall } = useBreakpoints();
  return itemsServices.map(({ icon, title, text, id }) => {
    return (
      <Stack
        component="article"
        flex={maxSmall ? "1 1 100%" : "1 1 50%"}
        key={id}
        spacing={1}
        p={1.5}
      >
        <Typography variant="h6" color="secondary.main">
          {icon}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="subtitle2" fontWeight={400}>
          {text}
        </Typography>
      </Stack>
    );
  });
}

export default Articles;
