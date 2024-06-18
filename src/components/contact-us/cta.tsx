"use client";

import { Flex, Text } from "@chakra-ui/react";
import { Button } from "../button";
import Wrapper from "../wrapper";

const Cta = () => {
  return (
    <Wrapper bg="brand.200">
      <Flex
        justify={"center"}
        direction={"column"}
        textAlign={"center"}
        align={"center"}
      >
        <Text fontSize={{ base: "3.5rem", lg: "4rem" }} fontWeight={"600"}>
          Upload your Resume, Get Hired
        </Text>
        <Text
          fontSize={"1.8rem"}
          w={{ base: "100%", md: "50%" }}
          mb="3rem"
          mt="2rem"
        >
          Take the first step towards unlocking a host of exciting features and
          opportunities
        </Text>
        <Button
          path="/"
          btnText="Get started"
          isIcon
          boxShadow="none"
          px=".7rem"
          py=".7rem"
          bg="brand.100"
        />
      </Flex>
    </Wrapper>
  );
};

export default Cta;
