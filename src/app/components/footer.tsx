"use client";

import FooterIcon from "@/app/assets/images/footer-icon.svg";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {
  footerData,
  footerNavLinksA,
  footerNavLinksB,
} from "../utils/constants";
import Wrapper from "./wrapper";

const Footer = () => {
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Image
        src={FooterIcon}
        alt="bbb"
        height={1100}
        width={1100}
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          zIndex: "100",
          animation: "move 5s infinite",
        }}
      />
      <Wrapper bg="brand.400" py="0">
        <Flex
          justify={"space-between"}
          pt={"8rem"}
          pb={"5rem"}
          flexWrap={"wrap"}
          fontWeight={"400"}
          gap="5rem"
          borderBottom="1px solid #d0d0d0"
          color="brand.100"
        >
          <Box>
            <Link href="/">
              <Image
                src="/assets/images/Primary-Logo-Green-and-white-on-transparent1.png"
                alt="footer image"
                height={100}
                width={100}
              />
            </Link>
            <Flex fontSize={"2rem"} color={"brand.600"} gap={5}>
              <BsTwitter />
              <BiLogoLinkedin />
              <BsInstagram />
            </Flex>
          </Box>

          <VStack gap="2rem" align={"flex-start"}>
            {footerNavLinksA.map((item, i) => (
              <HStack key={item.title} gap="1rem">
                <Link href={item.link} style={{ color: "#fff" }}>
                  {item.title}
                </Link>
                <Box
                  w={"0.4rem"}
                  h={"0.4rem"}
                  mx={"0.5rem"}
                  bg="brand.600"
                  borderRadius={"50%"}
                  display={i === 5 ? "none" : "inline-block"}
                />
              </HStack>
            ))}
          </VStack>
          <VStack gap="2rem" align={"flex-start"}>
            {footerNavLinksB.map((item, i) => (
              <HStack key={item.title} gap="1rem">
                <Link href={item.link} style={{ color: "#fff" }}>
                  {item.title}
                </Link>
                <Box
                  w={"0.4rem"}
                  h={"0.4rem"}
                  mx={"0.5rem"}
                  bg="brand.600"
                  borderRadius={"50%"}
                  display={i === 5 ? "none" : "inline-block"}
                />
              </HStack>
            ))}
          </VStack>
          <Flex
            gap={"2rem"}
            flexWrap={"wrap"}
            direction="column"
            justify={"space-between"}
            color="brand.100"
          >
            <Heading mb="1rem" fontSize={"1.8rem"}>
              How can we help?
            </Heading>
            {footerData.map((item, index) => (
              <Flex key={index} gap="1rem" align={"center"}>
                <Box color="brand.600">{item.icon}</Box>
                <Text color="brand.600">{item.text}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Wrapper>

      <Box w={"100%"} py={"2rem"} color={"brand.100"} bg="brand.400">
        <Flex
          mx={"auto"}
          w={"90%"}
          justify="center"
          align="center"
          direction={"column"}
        >
          <Text fontSize="1.7rem" fontWeight={"500"} color="brand.600">
            Powered by jobHub
          </Text>
          <Text fontSize="1.7rem" fontWeight={"500"} color="brand.600">
            © 2024 jobHub. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
