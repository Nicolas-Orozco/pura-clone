import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function useCustom() {
  const Gradient =
    "linear-gradient(45deg, #fd3fb3, #fd3f81 31%, #fd3e4f 78%, #fd3e4f)";
  const Btn = styled(Button)({
    textTransform: "Capitalize",
    backgroundImage: Gradient,
    borderRadius: 0,
  });
  const Logo = styled(Typography)({
    background: Gradient,
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textDecoration: "none",
    fontWeight: "bold",
    userSelect: "none",
    textTransform: "capitalize",
  });
  const Link = styled(Typography)(({ theme: { palette } }) => ({
    textDecoration: "none",
    color: palette.primary.main,
  }));
  const Item = styled(MenuItem)(({ theme: { palette } }) => ({
    lineHeight: 2.8,
    backgroundColor: palette.info.main,
    color: palette.background.default,
    transition: "color 300ms ease",
    "&:hover": {
      backgroundColor: palette.info.main,
      color: palette.primary.main,
    },
  }));
  const Copyright = styled(Typography)(({ theme: { palette } }) => ({
    fontWeight: "bolder",
    color: palette.secondary.main,
    textAlign: "center",
  }));
  const Wrapper = styled(Box)({
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexWrap: "wrap",
    gap: 35,
  });
  return { Link, Logo, Item, Copyright, Wrapper, Btn };
}
