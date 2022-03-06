import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

export default function useCustom() {
  const Logo = styled(Typography)({
    background:
      "linear-gradient(45deg, #fd3fb3, #fd3f81 31%, #fd3e4f 78%, #fd3e4f);",
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
    lineHeight: "2.9",
    backgroundColor: palette.info.main,
    color: palette.background.default,
    transition: "color 300ms ease",
    "&:hover": {
      backgroundColor: palette.info.main,
      color: palette.secondary.main,
    },
  }));
  return { Link, Logo, Item };
}
