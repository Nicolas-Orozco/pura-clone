import React from "react";
import Image from "material-ui-image";

function Example() {
  return (
    <Image
      src="https://uploads-ssl.webflow.com/5942027145541375fd9eaa52/59440e85ebd3db1d5c4125c0_mock-1.png"
      style={{ flex: "1", paddingTop: "0" }}
      imageStyle={{
        objectFit: "scale-down",
        userSelect: "none",
        userDrag: "none",
      }}
    />
  );
}

export default Example;
