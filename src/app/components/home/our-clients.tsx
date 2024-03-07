import React from "react";
import Wrapper from "../wrapper";
import Image from "next/image";
import hermes from "@/app/assets/images/hermes.svg";
import starks from "@/app/assets/images/starks.svg";
import sparkles from "@/app/assets/images/sparkles.svg";
import elohq from "@/app/assets/images/elohq.svg";
import starplug from "@/app/assets/images/starplug.svg";
import sblend from "@/app/assets/images/sblend.svg";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const OurClients = () => {
  return (
    <Wrapper>
      <Flex w={"100%"} flexDir={"column"} alignItems={"center"}>
        <Heading as={"h2"} textAlign={"center"} fontSize={"52px"} mb={"2rem"}>
          Client’s from around the world
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={"18px"}
          maxW={"757px"}
          mb={"100px"}
        >
          The software typically enables users to create purchase requisitions,
          submit them for approval, track order status, and manage supplier
          relationships.
        </Text>
      </Flex>

      <Box>
        <Flex
          h={{ base: "100px", md: "166px" }}
          w={"100%"}
          alignItems={"center"}
        >
          <Flex w={"33%"} h={"100%"} justifyContent={"center"}>
            <Image src={starks} alt={"hermes"} width={100} height={100} />
          </Flex>
          <Flex
            borderX={"1px solid #0000004c"}
            w={"33%"}
            h={"100%"}
            justifyContent={"center"}
          >
            <Image src={hermes} alt={"hermes"} width={100} height={100} />
          </Flex>
          <Flex w={"33%"} h={"100%"} justifyContent={"center"}>
            <Image src={sparkles} alt={"hermes"} width={100} height={100} />
          </Flex>
        </Flex>
        <Flex
          borderY={"1px solid #0000004c"}
          h={{ base: "100px", md: "166px" }}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Flex
            w={"50%"}
            h={"100%"}
            justifyContent={"center"}
            borderRight={"1px solid #0000004c"}
          >
            <Image src={elohq} alt={"elohq"} width={100} height={100} />
          </Flex>
          <Flex w={"50%"} h={"100%"} justifyContent={"center"}>
            <Image src={starplug} alt={"starplug"} width={100} height={100} />
          </Flex>
        </Flex>

        <Flex
          h={{ base: "100px", md: "166px" }}
          w={"100%"}
          alignItems={"center"}
        >
          <Flex w={"33%"} h={"100%"} justifyContent={"center"}>
            <Image src={sblend} alt={"sblend"} width={100} height={100} />
          </Flex>
          <Flex
            borderX={"1px solid #0000004c"}
            w={"33%"}
            h={"100%"}
            justifyContent={"center"}
          >
            <Image src={sparkles} alt={"sparkles"} width={100} height={100} />
          </Flex>
          <Flex w={"33%"} h={"100%"} justifyContent={"center"}>
            <Image src={hermes} alt={"hermes"} width={100} height={100} />
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default OurClients;
