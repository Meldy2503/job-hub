"use client";

import FooterIcon from "@/assets/images/footer-icon.svg";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import logoWhite from "@/assets/images/logo-white.svg";
import {
  footerData,
  footerNavLinksA,
  footerNavLinksB,
} from "../utils/constants";
import Wrapper from "./wrapper";
import Logo from "./logo";

const Footer = () => {
  return (
    <Box position={"relative"} overflow={"hidden"} color="white">
      <Image
        src={FooterIcon}
        alt="footer background image"
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
          pt={"6rem"}
          pb={"5rem"}
          flexWrap={"wrap"}
          fontWeight={"400"}
          gap="5rem"
          borderBottom="1px solid #d0d0d0"
          color="brand.100"
          align={"center"}
        >
          <Box>
            <Logo src={logoWhite} color={"brand.400"} width={65} />
            <Flex fontSize={"2rem"} color={"brand.100"} gap={5} mt="2rem">
              <Box bg="brand.450" borderRadius={"50%"} p="1rem">
                <BsTwitter />
              </Box>
              <Box bg="brand.450" borderRadius={"50%"} p="1rem">
                <BiLogoLinkedin />
              </Box>
              <Box bg="brand.450" borderRadius={"50%"} p="1rem">
                <BsInstagram />
              </Box>
            </Flex>
          </Box>

          <VStack gap="2rem" align={"flex-start"}>
            {footerNavLinksA.map((item) => (
              <HStack key={item.title} gap="1rem">
                <Link href={item.link} style={{ color: "#fff" }}>
                  {item.title}
                </Link>
              </HStack>
            ))}
          </VStack>
          <VStack gap="2rem" align={"flex-start"}>
            {footerNavLinksB.map((item) => (
              <HStack key={item.title} gap="1rem">
                <Link href={item.link} style={{ color: "#fff" }}>
                  {item.title}
                </Link>
              </HStack>
            ))}
          </VStack>
          <Flex
            gap={"2rem"}
            flexWrap={"wrap"}
            direction="column"
            justify={"space-between"}
          >
            <Heading mb="1rem" fontSize={"1.8rem"}>
              How can we help?
            </Heading>
            {footerData.map((item, index) => (
              <Flex key={index} gap="1rem" align={"center"}>
                <Box>{item.icon}</Box>
                <Text>{item.text}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Wrapper>

      <Box w={"100%"} py={"2rem"} bg="brand.400">
        <Flex
          mx={"auto"}
          w={"90%"}
          justify="center"
          align="center"
          direction={"column"}
        >
          <Text fontWeight={"500"}>Powered by JOBHUB</Text>
          <Text fontWeight={"500"} mt="1rem">
            © 2024. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
