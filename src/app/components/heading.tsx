"use client";

import React from "react";
import { Heading } from "@chakra-ui/react";

interface TitleProps {
  children: React.ReactNode;
  color?: string;
}

const Title = ({ children, color}: TitleProps) => {
  return (
    <Heading
      color={color ?? "brand.100"}
      fontWeight={"600"}
      fontSize={{ base: "4rem", md: "4.5rem", lg: "5rem" }}
      mb={{ base: "4rem", md: "6rem", lg: "8rem" }}
      w="fit-content"
      mx="auto"
      
  >
      {children}
    </Heading>
  );
};

export default Title;
