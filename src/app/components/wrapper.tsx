"use client";

import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  bg?: string;
  py?: string;
}

const Wrapper = ({ children, bg, py }: Props) => {
  return (
    <Box
      width="100%"
       bg={bg ?? "brand.100"}
      py={py ?? { base: "7rem", md: "10rem" }}
      position={"relative"}
    >
      <Box width="90%" maxW={"1280px"} m={"0 auto"} color='brand.150'>
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
