import React from "react";
import Wrapper from "../wrapper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import vector from "@/assets/images/vector.svg";
import ring from "@/assets/images/ring.svg";
import { Button } from "../button";

const Cta = () => {
  return (
    <Wrapper>
      <Flex
        justifyContent={"space-between"}
        w={"100%"}
        boxShadow={"0px 4px 30px 0px #C1BAF8B2"}
        py="4rem"
        px={{ base: "2rem", sm: "4rem", lg: "6rem" }}
        borderRadius={"3.2rem"}
        alignItems={"center"}
        direction={{ base: "column-reverse", md: "row" }}
        gap={"5rem"}
      >
        <Box w={{ base: "100%", md: "55%" }}>
          <Text fontSize="1.6rem">
            Trusted by over a hundred organisation across the globe
          </Text>
          <Box pos={"relative"}>
            <Box pos={"absolute"} top="-2.9rem" left={"-1rem"}>
              <Image src={vector} alt={"vector"} width={40} height={40} />
            </Box>
            <Heading
              fontWeight={500}
              fontSize={{ base: "3rem", xl: "4rem" }}
              mt={"4.8rem"}
              mb={"4rem"}
            >
              Explore the best procurement platform with your organisation
            </Heading>

            <Button path="/jobs" btnText="Get started" isIcon />
          </Box>
        </Box>
        <Flex w={{ base: "100%", md: "37%" }} justifyContent={"center"}>
          <Image
            src={ring}
            alt={"ring"}
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              maxWidth: "100%",
            }}
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Cta;
