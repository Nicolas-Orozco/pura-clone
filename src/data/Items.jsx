import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";

const itemsPages = [
  {
    title: "Home",
    id: "1",
    link: "#",
  },
  {
    title: "About",
    id: "2",
    link: "#",
  },
  {
    title: "Team",
    id: "3",
    link: "#",
  },
  {
    title: "Services",
    id: "4",
    link: "#services",
  },
  {
    title: "Contact",
    id: "5",
    link: "#",
  },
];
const itemsIcons = [
  {
    icon: <FacebookIcon />,
    link: "#",
    id: "1",
  },
  {
    icon: <GoogleIcon />,
    link: "#",
    id: "2",
  },
  {
    icon: <TwitterIcon />,
    link: "#",
    id: "3",
  },
];
const itemsServices = [
  {
    icon: <LightbulbOutlinedIcon />,
    title: "Unique layouts",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .",
  },
  {
    icon: <BoltOutlinedIcon />,
    title: "New features",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .",
  },
  {
    icon: <TvOutlinedIcon />,
    title: "Responsive design",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .",
  },
  {
    icon: <AllInclusiveOutlinedIcon />,
    title: "And more & more ...",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .",
  },
];
export { itemsPages, itemsIcons, itemsServices };
