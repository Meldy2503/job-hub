"use client";

import contactImage from "@/assets/images/contact-img2.webp";
import { Flex, Text, VStack } from "@chakra-ui/react";

const ContactHeroSection = () => {
  return (
    <Flex
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgb(0, 0, 0, 0.4)), url(${contactImage.src})`,
      }}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100%"
      align={"center"}
      justify={"center"}
      h="60vh"
      color="white"
      textAlign={"center"}
    >
      <VStack>
        <Text
          fontSize={{ base: "3.5rem", lg: "5rem" }}
          fontWeight={"600"}
          w={{ base: "100%", md: "80%" }}
          lineHeight={"1.3"}
        >
          Got any Feedbacks or Questions?{" "}
        </Text>
        <Text mt="1rem" px="1rem">
          We are here to assist you every step of the way.
        </Text>
      </VStack>
    </Flex>
  );
};

export default ContactHeroSection;
