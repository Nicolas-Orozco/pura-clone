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
    link: "#home",
  },
  {
    title: "About",
    id: "2",
    link: "#about",
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
    link: "#contact",
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
    icon: <LightbulbOutlinedIcon fontSize="large" />,
    title: "Unique layouts",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .",
    id: "1",
  },
  {
    icon: <BoltOutlinedIcon fontSize="large" />,
    title: "New features",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .",
    id: "2",
  },
  {
    icon: <TvOutlinedIcon fontSize="large" />,
    title: "Responsive design",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .",
    id: "3",
  },
  {
    icon: <AllInclusiveOutlinedIcon fontSize="large" />,
    title: "And more & more ...",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .",
    id: "4",
  },
];
const itemsTeam = [
  {
    name: "Mark John",
    icon: "https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/5942bd72cabb8d04b11a7ad5_layer-4.png",
    role: "Developer",
  },
  {
    name: "Sarah Levo",
    icon: "https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/5942bd7239c97850d0731ab4_layer-5.png",
    role: "Designer",
  },
  {
    name: "Xavi Miko",
    icon: "https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/5942bd72fe536204a1cc7dd6_layer-6.png",
    role: "CEO",
  },
];
export { itemsPages, itemsIcons, itemsServices, itemsTeam };
