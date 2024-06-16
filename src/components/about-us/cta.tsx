import React from "react";
import Wrapper from "../wrapper";
import { Box, Flex, Heading } from "@chakra-ui/react";
import team2 from "@/assets/images/team2.webp";
import Image from "next/image";
import { Button } from "../button";

const Cta = () => {
  return (
    <Wrapper>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={{ base: "100%", md: "90%", lg: "80%" }}
        mx={"auto"}
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Box w={{ base: "100%", lg: "40%" }}>
          <Heading fontSize={"5rem"} fontWeight={"700"} mb={"3rem"}>
            Join{" "}
            <span
              style={{
                color: "#ff5621",
              }}
            >
              jobHub
            </span>{" "}
            today and land your dream job
          </Heading>
          <Button btnText="Get started" path="/jobs" isIcon />
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} mb={{ base: "3rem", md: "0" }}>
          <Image
            src={team2}
            alt={"team"}
            width={800}
            height={800}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "1.2rem",
            }}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Cta;
