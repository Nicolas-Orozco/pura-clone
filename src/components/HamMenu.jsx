import React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function HamMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems = ["Home", "About", "Team", "Services", "Contact"];
  return (
    <>
      <Button
        variant="text"
        color="inherit"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {" "}
        <MenuIcon sx={{ fontSize: 35 }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            onClick={handleClose}
            key="item"
            sx={{
              lineHeight: "2.7",
              backgroundColor: "info.main",
              color: ({ palette }) =>
                palette.getContrastText(palette.info.main),
              transition: "color 300ms ease",
              "&:hover": {
                backgroundColor: "info.main",
                color: "secondary.main",
              },
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default HamMenu;
