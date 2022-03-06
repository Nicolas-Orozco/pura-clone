import React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import useCustom from "../../hooks/useCustom";
import { itemsPages } from "../../data/Items";

function HamMenu() {
  const { Item } = useCustom();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        variant="text"
        color="inherit"
        id="menu-button"
        aria-controls={open ? "navigation-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {" "}
        <MenuIcon sx={{ fontSize: 35 }} />
      </Button>
      <Menu
        id="navigation-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
      >
        {itemsPages.map(({ title, id, link }) => (
          <Item onClick={handleClose} component="a" href={link} key={id}>
            {title}
          </Item>
        ))}
      </Menu>
    </>
  );
}

export default HamMenu;
