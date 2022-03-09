import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import useCustom from "../../hooks/useCustom";
import { itemsIcons } from "../../data/Items";

function Contact() {
  const { Link } = useCustom();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={2.5}
        component={Link}
        my={2}
      >
        <MailOutlineIcon sx={{ marginRight: -1.5 }} />
        <Typography color="info.main" letterSpacing={0.5} component="span">
          support@themeptation.com
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={2.5}
        component={Link}
        my={2}
      >
        <LocalPhoneOutlinedIcon sx={{ marginRight: -1.5 }} />
        <Typography color="info.main" letterSpacing={0.5} component="span">
          +001-123-456-7890
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-start"
        spacing={2.5}
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

export default Contact;
