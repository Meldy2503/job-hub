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
        flexDir={{ base: "column", md: "row" }}
        gap='5rem'
      >
        <Box w={{ base: "100%", lg: "40%" }}>
          <Heading
            fontSize={{ base: "3rem", md: '3.5rem', lg: "4.5rem" }}
            fontWeight={"700"}
            mb={"2rem"}
            lineHeight={"1.4"}
          >
            Sign up today on{" "}
            <span
              style={{
                color: "#FFAF2E",
              }}
            >
              jobHub
            </span>{" "}
            to secure your dream job.
          </Heading>
          <Button btnText="Get started" path="/register" isIcon />
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} >
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
