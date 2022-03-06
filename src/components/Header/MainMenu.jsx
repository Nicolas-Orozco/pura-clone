import React from "react";
import Stack from "@mui/material/Stack";
import useCustom from "../../hooks/useCustom";
import { itemsPages, itemsIcons } from "../../data/Items";

function MainMenu() {
  const { Link } = useCustom();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        spacing={4}
        component="nav"
        role="navigation"
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
        spacing={4}
        component="div"
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
