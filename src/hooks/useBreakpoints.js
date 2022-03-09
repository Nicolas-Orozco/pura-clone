import useMediaQuery from "@mui/material/useMediaQuery";

export default function useBreakpoints() {
  const maxExtraSmall = useMediaQuery("(max-width:479px)");
  const maxSmall = useMediaQuery("(max-width:768px)");
  const maxMedium = useMediaQuery("(max-width:991px)");
  return { maxExtraSmall, maxSmall, maxMedium };
}
