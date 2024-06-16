"use client";

import { Flex, Text } from "@chakra-ui/react";
import { Button } from "../button";
import Title from "../heading";
import Wrapper from "../wrapper";

const Cta = () => {
  return (
    <Wrapper bg="brand.200">
      <Flex justify={"center"} direction={"column"} align={"center"}>
        <Title>Upload your Resume, Get Hired</Title>
        <Text
          fontSize={"1.8rem"}
          w={{ base: "100%", md: "50%" }}
          textAlign={"center"}
          mb="3rem"
          mt="-1rem"
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
