"use client";

import React from "react";
import { Heading } from "@chakra-ui/react";

interface TitleProps {
  children: React.ReactNode;
  color?: string;
}

const Title = ({ children, color }: TitleProps) => {
  return (
    <Heading
      color={color ?? "brand.150"}
      fontWeight={"600"}
      fontSize={{ base: "3.5rem", lg: "4rem" }}
      mb= "3rem"
      w="fit-content"
      mx="auto"
      textAlign={"center"}
    >
      {children}
    </Heading>
  );
};

export default Title;
