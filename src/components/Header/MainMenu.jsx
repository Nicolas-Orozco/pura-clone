import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { itemsPages, itemsIcons } from "../../data/Items";

const Link = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
}));
function MainMenu() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
        component="nav"
      >
        {itemsPages.map(({ title, id, link }) => (
          <Link variant="subtitle1" component="a" href={link} key={id}>
            {title}
          </Link>
        ))}
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
        component="nav"
      >
        {itemsIcons.map(({ icon, id, link }) => (
          <Link variant="subtitle1" component="a" href={link} key={id}>
            {icon}
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default MainMenu;
