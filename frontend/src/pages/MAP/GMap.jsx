import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import GMapDetails from "./GMapDetails";

const GMap = () => {
  return (
    <ChakraProvider theme={theme}>
      <GMapDetails />
    </ChakraProvider>
  );
};

export default GMap;
