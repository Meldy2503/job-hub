"use client";

import elohq from "@/assets/images/elohq.svg";
import hermes from "@/assets/images/hermes.svg";
import sblend from "@/assets/images/sblend.svg";
import sparkles from "@/assets/images/sparkles.svg";
import starplug from "@/assets/images/starplug.svg";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Title from "../heading";
import Wrapper from "../wrapper";

const OurClients = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  return (
    <Wrapper>
      <Flex w={"100%"} flexDir={"column"} alignItems={"center"}>
        <Title>Client’s from around the world</Title>
        <Text textAlign={"center"} maxW={"757px"} mb={"5rem"}>
          The software typically enables users to create purchase requisitions,
          submit them for approval, track order status, and manage supplier
          relationships.
        </Text>
      </Flex>

      <Box>
        <Flex
          borderBottom={{ base: "none", sm: "1px solid #0000004c" }}
          h={{ base: "inherit", sm: "13rem" }}
          alignItems={"center"}
          justifyContent={"space-around"}
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "4rem", sm: "0" }}
        >
          <Flex
            w={"50%"}
            h={"100%"}
            justifyContent={"center"}
            borderRight={{ base: "none", sm: "1px solid #0000004c" }}
          >
            <Image
              src={elohq}
              alt={"elohq"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
          <Flex w={"50%"} h={"100%"} justifyContent={"center"}>
            <Image
              src={starplug}
              alt={"starplug"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
        </Flex>

        <Flex
          h={{ base: "inherit", sm: "13rem" }}
          w={"100%"}
          alignItems={"center"}
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "4rem", sm: "0" }}
          mt={{ base: "4rem", sm: "0" }}
        >
          <Flex
            w={{ base: "50%", sm: "33%" }}
            h={"100%"}
            justifyContent={"center"}
          >
            <Image
              src={sblend}
              alt={"sblend"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
          <Flex
            borderX={{ base: "none", sm: "1px solid #0000004c" }}
            w={{ base: "50%", sm: "33%" }}
            h={"100%"}
            justifyContent={"center"}
          >
            <Image
              src={sparkles}
              alt={"sparkles"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
          <Flex
            w={{ base: "50%", sm: "33%" }}
            h={"100%"}
            justifyContent={"center"}
          >
            <Image
              src={hermes}
              alt={"hermes"}
              width={isMobile ? 130 : 150}
              height={130}
            />
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default OurClients;
